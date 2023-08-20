let ulElement = document.querySelector("ul");
ulElement.onmousedown = function (e) {
      e.preventDefault();
}
ulElement.onclick = function (e) {
      console.log(e.target.innerHTML)
}
let input = document.querySelector(`input[type="text"]`);
ulElement.onclick = function (e) {
      input.value = e.target.innerHTML;
}
