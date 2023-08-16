let ulElement = document.querySelector("ul");
ulElement.onmousedown = function (e) {
     e.preventDefault();
}
ulElement.onclick = function(e) {
      console.log(e.target)
}
