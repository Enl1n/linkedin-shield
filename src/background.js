/**
 * LinkedIn Shield - Background Service Worker
 * Receives blocked-probe events via chrome.runtime.onMessage,
 * persists log to chrome.storage.local, updates action badge.
 */

const STORAGE_KEY = 'liShieldLog';
const MAX_ENTRIES = 5000;

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type !== 'BLOCKED') return;

  const entry = message.entry;

  chrome.storage.local.get(STORAGE_KEY, (result) => {
    const log = result[STORAGE_KEY] ?? [];
    log.push(entry);
    if (log.length > MAX_ENTRIES) log.splice(0, log.length - MAX_ENTRIES);

    chrome.storage.local.set({ [STORAGE_KEY]: log }, () => {
      const count = log.length;
      const label = count > 999 ? '999+' : String(count);

      if (sender.tab?.id) {
        chrome.action.setBadgeText({ text: label, tabId: sender.tab.id });
        chrome.action.setBadgeBackgroundColor({ color: '#e8000d', tabId: sender.tab.id });
      }
    });
  });
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ [STORAGE_KEY]: [] });
});
