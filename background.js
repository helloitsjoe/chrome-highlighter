function createContextMenuItem(bgColor, color) {
  chrome.contextMenus.create({
    id: `highlight:${bgColor}:${color}`,
    title: `Highlight selection in ${bgColor}`,
    type: "normal",
    contexts: ["selection"],
  });
}

createContextMenuItem("yellow", "black");
createContextMenuItem("lightgreen", "black");
createContextMenuItem("orange", "black");
createContextMenuItem("red", "white");
createContextMenuItem("blue", "white");
createContextMenuItem("black", "white");

// TODO
// chrome.contextMenus.create({
//   id: "unhighlight",
//   title: "Remove highlight from selection",
//   type: "normal",
//   contexts: ["selection"],
// });

chrome.contextMenus.onClicked.addListener((item, tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tab.id, { action: item.menuItemId });
  });
});
