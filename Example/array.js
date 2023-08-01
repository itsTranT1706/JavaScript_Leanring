// // // //solution1:
// // // let nodeRed = document.querySelector(".red");
// // // let nodeP = document.querySelector("p");
// // // nodeP.setAttribute("style","color:#f05123");
// // // nodeRed.setAttribute("style","background-color:#f00");

// // //solution 2:
// // let nodeRed = document.querySelector(".red");
// // nodeRed.style.backgroundColor = "#f00";
// // let nodeP = document.querySelector("p");
// // nodeP.style.color="#f05123";

// //solution 3:
// Object.assign(document.querySelector(".red").style, {
//     backgroundColor :"#f00",

// })
// Object.assign(document.querySelector("p").style, {
//     color:"#f05123",
// })
let nodeHead = document.querySelector(".head");
console.log([nodeHead.classList])
nodeHead.classList.add("color");
console.log(nodeHead.classList.contains("color"));
// console.log(nodeHead.classList.remove("color"));
// setTimeout(() => {
//     nodeHead.classList.remove("color");
// }, 5000);
let button = document.querySelector(".button");
Object.assign(button.style, {
    width:"100px",
    height:"100px",
    backgroundColor:"blue",
})
// setInterval(()=>{
//     button.classList.toggle("color")
// },1000)
setInterval(()=> { 
    nodeHead.classList.toggle("color")
}, 1000)
