let elementNode = document.querySelector(".heading");
console.log(elementNode)
elementNode.innerText = "F8 - Học lập trình để đi làm";
document.write(`<h2></h2>`);
let elementNode1= document.querySelector("h2");
elementNode1.setAttribute("class","headingName");
elementNode1.textContent = "F8 - Học lập trình để đi làm";
elementNode.setAttribute("style","color:blue");
let boxElement = document.querySelector(".tien");
boxElement.innerHTML = `<p class="tung" style ="color:red">Hello i am Tran Viet Tien</p>`
console.log(boxElement);
