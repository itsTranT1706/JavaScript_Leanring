let inputElement = document.querySelector(`input[type="text"]`);
// console.log(inputElement);
inputElement.onchange = function(e) {
  console.log(e.target.value); //log ra khi blur ra ngoai!
}
inputElement.oninput = function(e) {
  console.log(e.target.value);
}

let checkBox = document.querySelector(`input[type= "checkbox"]`) ;
// console.log(checkBox)
checkBox.oninput = function(e) {
  console.log(e.target.value) 

}
checkBox.onchange = (e)=> {
  console.log(e.target.checked)
}

let selectElement = document.querySelector(`select`);
selectElement.onchange  = function(e) {
  console.log(e.target.value)
}