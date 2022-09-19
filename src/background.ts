
chrome.runtime.onInstalled.addListener(() => {
  // console.log('startup');
  chrome.storage.local.set({ message: 'HELLO POOP' });
});

chrome.runtime.onStartup.addListener(() => {
  // console.log('startup');
});

chrome.storage.local.get(["bigman"]).then((objectOrSomething) => {
  chrome.tabs.create({ url: 'https://google.com/' })

  chrome.storage.local.set({ bigman: Math.random() })
})



// async function Install<T>(globalThis: T) {
//   chrome.runtime.onConnect.addListener((port) => {
//     let tick = 0;
//     port.onDisconnect.addListener(() => {
//       //nothing

//     });
//     port.onMessage.addListener((message, incoming) => {
//       ++tick;
//       port.postMessage({
//         respondingTo: message,
//         tick
//       });
//     });

//     port.postMessage({
//       text: 'you best be replying now',
//       tick
//     });
//   });

  // let tick = 0;
  // const log = async (text: any, ...args: any[]) => {
  //   const message = {
  //     type: 'log',
  //     sequence: ++tick,
  //     text,
  //     args
  //   };
  //   // const current = await chrome.tabs.getCurrent();
  //   const [current] = await chrome.tabs.query({ active: true });
  //   if (current) {
  //     chrome.tabs.sendMessage(current.id || 0, {});
  //     chrome.runtime.sendMessage(message);
  //   }
  // };
  // log(`globalThis: ${globalThis ? 'yes' : 'no'}`);
  // chrome.action.onClicked.addListener((tab) => {
  //   log('hey someone clicked');
  // })

  // TODO Event management
  // chrome.runtime.onUpdateAvailable
  // chrome.runtime.onInstalled // * special bc/its when we make context menus

  // chrome.runtime.onStartup
  // chrome.runtime.onSuspend

  // chrome.runtime.onSuspendCanceled
  // chrome.runtime.onRestartRequired

  // chrome.runtime.onConnectExternal
  // chrome.runtime.onMessageExternal
  // chrome.runtime.onMessage

  // chrome.alarms.create('keepalive', { periodInMinutes: 1 });

  // chrome.action.onClicked.addListener((tab) => {
  //   log(`the tab ${tab?.id} was clicked`);
  // });
// }
// Install(self);
