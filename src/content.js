/**
 * LinkedIn Shield - Content Script
 * Runs at document_start, before LinkedIn's JS loads.
 * Intercepts fetch/XHR/Image probes targeting chrome-extension:// URLs
 * and logs each blocked attempt.
 */

(function () {
  'use strict';

  const LOG_KEY = 'linkedinshield_log';
  const CHANNEL = new BroadcastChannel('linkedinshield');

  // --- Helpers ---

  function isChromeExtensionProbe(url) {
    try {
      return new URL(url).protocol === 'chrome-extension:';
    } catch {
      return false;
    }
  }

  function recordBlock(url) {
    const entry = {
      ts: Date.now(),
      url: url,
      hostname: window.location.hostname
    };
    // Persist to chrome.storage via background message
    CHANNEL.postMessage({ type: 'BLOCKED', entry });
  }

  // --- Intercept fetch ---

  const _fetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : input?.url ?? '';
    if (isChromeExtensionProbe(url)) {
      recordBlock(url);
      // Return a 404-like rejected fetch so LinkedIn's script silently fails
      return Promise.resolve(
        new Response(null, { status: 404, statusText: 'Not Found' })
      );
    }
    return _fetch(input, init);
  };

  // --- Intercept XMLHttpRequest ---

  const _open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    if (isChromeExtensionProbe(url)) {
      recordBlock(url);
      // Mark as blocked so send() is a no-op
      this._liShieldBlocked = true;
    }
    return _open.call(this, method, url, ...rest);
  };

  const _send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (...args) {
    if (this._liShieldBlocked) {
      // Simulate a completed request with status 0 (network error)
      Object.defineProperty(this, 'readyState', { value: 4, writable: true });
      Object.defineProperty(this, 'status', { value: 0, writable: true });
      return;
    }
    return _send.apply(this, args);
  };

  // --- Intercept Image src probing (some fingerprint scripts use this) ---

  const _imgSrcDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  Object.defineProperty(HTMLImageElement.prototype, 'src', {
    set(value) {
      if (isChromeExtensionProbe(value)) {
        recordBlock(value);
        return; // Do not set src, extension is not revealed
      }
      _imgSrcDescriptor.set.call(this, value);
    },
    get() {
      return _imgSrcDescriptor.get.call(this);
    },
    configurable: true
  });

  // --- Intercept link/script element src/href (some scanners use DOM injection) ---

  const _setAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    if ((name === 'src' || name === 'href') && isChromeExtensionProbe(value)) {
      recordBlock(value);
      return;
    }
    return _setAttribute.call(this, name, value);
  };

})();
