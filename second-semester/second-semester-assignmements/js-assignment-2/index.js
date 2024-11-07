function positionAt(anchor, position, elem) {
  const anchorRect = anchor.getBoundingClientRect();
  const elemRect = elem.getBoundingClientRect();

  let top, left;

  if (position === "top") {
    top = anchorRect.top - elemRect.height;
    left = anchorRect.left + (anchorRect.width - elemRect.width) / 2;
  } else if (position === "right") {
    top = anchorRect.top + (anchorRect.height - elemRect.height) / 2;
    left = anchorRect.left + anchorRect.width;
  } else if (position === "bottom") {
    top = anchorRect.top + anchorRect.height;
    left = anchorRect.left + (anchorRect.width - elemRect.width) / 2;
  }

  elem.style.top = `${top + window.scrollY}px`;
  elem.style.left = `${left + window.scrollX}px`;
  elem.classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const anchor = document.getElementById("anchor");

  const tooltipTop = document.getElementById("tooltip-top");
  positionAt(anchor, "top", tooltipTop);

  const tooltipRight = document.getElementById("tooltip-right");
  positionAt(anchor, "right", tooltipRight);

  const tooltipBottom = document.getElementById("tooltip-bottom");
  positionAt(anchor, "bottom", tooltipBottom);
});
