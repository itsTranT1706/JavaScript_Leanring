let boxElement = document.querySelector(".box");
console.log([boxElement]);
document.write("<h1>Tran Viet Tien</h1>");
let node = document.querySelector("h1");
node.setAttribute("style", "color:blue");
let nodeHeading = document.querySelector(".heading");
let nodeText =document.querySelector(".text");
nodeText.innerHTML=`<h2 style="color:red">this is heading</h2>`
nodeHeading.style.color ="green"
nodeHeading.style.width = "100px";
nodeHeading.style.height= "100px";
nodeHeading.style.backgroundColor = "blue";