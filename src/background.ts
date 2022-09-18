async function Install<T>(globalThis: T) {
  const log = (message: any, ...args: any[]) => {
    try {
      console.warn(message, ...args);
    } catch {
      debugger;
    }
  }
  log('hi');
  chrome.storage.local.get(["name"], async ({ name }) => {
    // chrome.tabs.sendMessage(0, { name });
    chrome.runtime.sendMessage({
      type: 'set-name',
      name
    });
    const tabs = await chrome.tabs.query({ active: true });
    tabs.map(tab => tab.id || 0).forEach((id) => {
      chrome.tabs.sendMessage(id, {
        type: 'set-name',
        name
      })
    })
  });

  chrome.browserAction.onClicked.addListener(tab => {
    chrome.storage.local.get(["name"], ({ name }) => {
      chrome.tabs.sendMessage(tab.id || 0, { name });
    });
    chrome.tabs.sendMessage(tab.id || 0, {
      type: 'clicked'
    })
  });
}

Install(self);