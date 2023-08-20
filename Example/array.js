let divElement = document.querySelector("div");
divElement.onclick = function(e) {
     console.log("div");
}
let buttonElement = document.querySelector("button");
buttonElement.onclick = function(e) {
      e.stopPropagation();
      console.log("click me!");

}
let ulElement = document.querySelector("ul");
ulElement.onmousedown = function(e) {
      e.preventDefault();
}