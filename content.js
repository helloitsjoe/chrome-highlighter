function highlight(color, bgColor) {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.setAttribute(
      "style",
      `background-color: ${bgColor}; display: inline; color: ${color};`,
    );
    span.appendChild(range.extractContents());
    range.insertNode(span);
    // range.surroundContents(span);
  }
}

// Handle highlighting and unhighlighting of selected text
chrome.runtime.onMessage.addListener((request /*, sender, sendResponse */) => {
  const [action, bgColor, color] = request.action.split(":");
  if (action === "highlight") {
    highlight(color, bgColor);
  } else if (action === "unhighlight") {
    // TODO
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "s" && event.metaKey && event.shiftKey) {
    highlight("white", "blue");
  }
});
