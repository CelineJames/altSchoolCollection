const icons = document.querySelectorAll(".label-icon");
const contents = document.querySelectorAll(".content");
const mainContainer = document.querySelector(".main-content");

// icons.forEach(function (icon, offset) {
//   icon.addEventListener("click", () => {
//     if (icon.getAttribute("src") === "./assets/plus.svg") {
//       icon.setAttribute("src", "./assets/minus.svg");
//     } else {
//       icon.setAttribute("src", "./assets/plus.svg");
//     }
//   });
// });

icons.forEach((icon, offset) => {
  icon.addEventListener("click", () => {
    console.log("clicked");
  });
});

console.dir(icons);
console.log("meeeee")

// const wait = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, milliseconds);
//   });
// };

// const waitPromise = wait(1_000);
// console.log(waitPromise); // pending at this stage

// waitPromise.then(() => {
//   console.log("waited 1 second");
//   console.log(waitPromise); // fulfilled at this stage
// });

// console.log(waitPromise);

// // fetch('url').then(res).then(data)

// function payment(data, callback) {
//   fetch("")
//     .then(res)
//     .then((data) => callback())
//     .catch("");
// }

// payment({}, processUserPayment);

// // function processUserPayment(data) {}
