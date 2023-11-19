// Handle highlighting and unhighlighting of selected text
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const [action, bgColor, color] = request.action.split(":");
  if (action === "highlight") {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const newNode = document.createElement("span");
      newNode.setAttribute(
        "style",
        `background-color: ${bgColor}; display: inline; color: ${color};`,
      );
      range.surroundContents(newNode);
    }
  } else if (action === "unhighlight") {
    // TODO
  }
});
