// // //solution1:
// // let nodeRed = document.querySelector(".red");
// // let nodeP = document.querySelector("p");
// // nodeP.setAttribute("style","color:#f05123");
// // nodeRed.setAttribute("style","background-color:#f00");

// //solution 2:
// let nodeRed = document.querySelector(".red");
// nodeRed.style.backgroundColor = "#f00";
// let nodeP = document.querySelector("p");
// nodeP.style.color="#f05123";

//solution 3:
Object.assign(document.querySelector(".red").style, {
    backgroundColor :"#f00",

})
Object.assign(document.querySelector("p").style, {
    color:"#f05123",
})