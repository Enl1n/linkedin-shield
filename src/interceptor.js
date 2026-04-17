/**
 * LinkedIn Shield - Interceptor (MAIN world)
 * Runs in the page's own JavaScript context.
 * Overrides fetch, XHR, Image and setAttribute BEFORE LinkedIn's scripts load.
 * Communicates blocked probes to the ISOLATED world via window.postMessage.
 */

(function () {
  'use strict';

  function isChromeExtProbe(url) {
    try {
      return typeof url === 'string' && url.startsWith('chrome-extension://');
    } catch {
      return false;
    }
  }

  function reportBlock(url) {
    window.postMessage({
      __liShield: true,
      url: url,
      ts: Date.now(),
      hostname: window.location.hostname
    }, '*');
  }

  // --- Intercept fetch ---
  const _fetch = window.fetch;
  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    if (isChromeExtProbe(url)) {
      reportBlock(url);
      return Promise.resolve(new Response(null, { status: 404, statusText: 'Not Found' }));
    }
    return _fetch.apply(this, arguments);
  };

  // --- Intercept XMLHttpRequest ---
  const _xhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    if (isChromeExtProbe(url)) {
      reportBlock(url);
      this._liShieldBlocked = true;
    }
    return _xhrOpen.apply(this, arguments);
  };

  const _xhrSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    if (this._liShieldBlocked) return;
    return _xhrSend.apply(this, arguments);
  };

  // --- Intercept Image src ---
  const imgDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  if (imgDesc) {
    Object.defineProperty(HTMLImageElement.prototype, 'src', {
      set(value) {
        if (isChromeExtProbe(value)) { reportBlock(value); return; }
        imgDesc.set.call(this, value);
      },
      get() { return imgDesc.get.call(this); },
      configurable: true
    });
  }

  // --- Intercept setAttribute (link/script href/src injection) ---
  const _setAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    if ((name === 'src' || name === 'href') && isChromeExtProbe(value)) {
      reportBlock(value);
      return;
    }
    return _setAttribute.apply(this, arguments);
  };

})();
