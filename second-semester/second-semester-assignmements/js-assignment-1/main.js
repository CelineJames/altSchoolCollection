const divElement = document.createElement("div"),
  body = document.body,
  paragraph = document.createElement("p"),
  quotesBefore = document.createElement("span"),
  quotesAfter = document.createElement("span");

body.style.maxWidth = "100vw";
body.style.minHeight = "100vh";
body.style.display = "flex";
body.style.justifyContent = "start";
body.style.alignItems = "center";
divElement.setAttribute("class", "new-div");
divElement.style.borderLeft = "5px solid blue";
divElement.style.borderRadius = "5px";
divElement.style.marginLeft = "5px";
divElement.style.minWidth = "300px";
divElement.style.height = "120px";
divElement.style.paddingLeft = "15px";
divElement.style.display = "flex";
divElement.style.justifyContent = "start";
divElement.style.alignItems = "center";
paragraph.style.width = "100%";
paragraph.style.position = "relative";
paragraph.style.fontSize = "16px";
paragraph.textContent =
  "See you on the other side, where we will discuss the Events in Javascript, may the fourth be with you.";
//   quotesBefore.textContent = '"'
//   quotesAfter.textContent = '"'
//   quotesBefore.style.fontSize = "3rem"
//   quotesBefore.style.color = "blue"
//   quotesBefore.style.position = "absolute"
//   quotesBefore.style.top = "-35px"
//   quotesBefore.style.left = "8px"
// quotesAfter.style.fontSize = "3rem";
// quotesAfter.style.color = "blue";
// quotesAfter.style.position = "absolute";
// quotesAfter.style.top = "20px";
// quotesAfter.style.left = "8px";

//   paragraph.appendChild(quotesBefore)
//   paragraph.appendChild(quotesAfter)

// One way to create the quotes
//  I LIKE THIS WAY BETTER

function addStyles() {
  const style = document.createElement("style");
  style.textContent = `

                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    }

                p {
                    position: relative;
                    padding: 10px;
                    font-style: italic;
                }
                p::before {
                    content: open-quote;
                    position: absolute;
                    left: 10px; 
                    top: -35px;
                    font-size: 3rem;
                    color: blue;
                }
                p::after {
                    content: close-quote;
                    position: absolute;
                    left: 10px; 
                    top: 40px;
                    font-size: 3rem;
                    color: blue;
                }
            `;
  document.head.appendChild(style);
}

body.appendChild(divElement);
divElement.appendChild(paragraph);

addStyles();
