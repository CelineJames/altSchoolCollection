document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".label-icon");
  const hamburger = document.querySelector(".navbar");
  const navbar = document.querySelector("nav");

  console.dir(icons);

  icons.forEach((icon, offset) => {
    icon.addEventListener("click", () => {
      if (icon.getAttribute("src") === "./assets/plus.svg") {
        icon.setAttribute("src", "./assets/minus.svg");
      } else {
        icon.setAttribute("src", "./assets/plus.svg");
      }
      icon.offsetParent
        .querySelector(".content")
        .classList.toggle("active-content");
    });
  });

  hamburger.addEventListener("click", () => {
    if (hamburger.getAttribute("src") === "./assets/hamburger.svg") {
      hamburger.setAttribute("src", "./assets/close-hamburger.svg");
      navbar.classList.add("display")
    } else {
      hamburger.setAttribute("src", "./assets/hamburger.svg");
      navbar.classList.remove("display");
    }
    
  });
});
