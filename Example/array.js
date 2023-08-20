let divElement = document.querySelector("div");
divElement.onclick = function(e) {
     console.log("div");
}
let buttonElement = document.querySelector("button");
buttonElement.onclick = function(e) {
      e.stopPropagation();//stopPropagation() stops an event from bubbling or propagating up the DOM tree.
      console.log("click me!");

}
let ulElement = document.querySelector("ul");
ulElement.onmousedown = function(e) {
      e.preventDefault();//preventDefault() prevents the default browser behavior for a given element.
}