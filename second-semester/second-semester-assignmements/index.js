document.addEventListener("DOMContentLoaded", function () {
  const flipCards = document.querySelectorAll(".flip-card");
  const hamburger = document.querySelector(".navbar"); // Make sure you're selecting the <img> tag inside the navbar
  const ul = document.querySelector("ul");

  hamburger.addEventListener("click", () => {
    if (hamburger.getAttribute("src") === "./assets/icon-hamburger (1).svg") {
      hamburger.setAttribute("src", "./assets/icon-close-menu.svg");
    } else {
      hamburger.setAttribute("src", "./assets/icon-hamburger (1).svg");
    }

    ul.classList.toggle("display");
  });

  flipCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.querySelector(".flip-card-inner").classList.toggle("rotate");
    });
  });
});
