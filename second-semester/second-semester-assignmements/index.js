const hamburger = document.querySelector(".navbar"); // Make sure you're selecting the <img> tag inside the navbar
const ul = document.querySelector("ul");


hamburger.addEventListener("click", () => {
  // Check the current src of the hamburger icon
  if (hamburger.getAttribute("src") === "./assets/icon-hamburger (1).svg") {
    // Change to the close icon
    hamburger.setAttribute("src", "./assets/icon-close-menu.svg");
  } else {
    // Change back to the hamburger icon
    hamburger.setAttribute("src", "./assets/icon-hamburger (1).svg");
  }

  ul.classList.toggle("display");
});
