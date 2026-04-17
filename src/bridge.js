/**
 * LinkedIn Shield - Bridge (ISOLATED world)
 * Listens for window.postMessage events from the MAIN world interceptor
 * and forwards them to the background service worker via chrome.runtime.sendMessage.
 * chrome.runtime is only available in the ISOLATED world, not MAIN.
 */

window.addEventListener('message', function (event) {
  if (
    event.source !== window ||
    !event.data ||
    !event.data.__liShield
  ) return;

  chrome.runtime.sendMessage({
    type: 'BLOCKED',
    entry: {
      url: event.data.url,
      ts: event.data.ts,
      hostname: event.data.hostname
    }
  });
});
