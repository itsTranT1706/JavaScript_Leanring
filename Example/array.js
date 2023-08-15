document.write("<h1></h1>");
let h1Element = document.querySelector("h1");
h1Element.classList.add("box");
h1Element.innerHTML="click here!"
h1Element.onclick  = function(e) {
    console.log(e.target.innerHTML);
    document.write(e.target.innerHTML)
    // alert("hello world !")
}
h1Element.addEventListener("click",(e)=> {
    console.log("xin chao cau!");   
})
let h3Elements = document.querySelectorAll("h3");
// console.log(h3Elements)
for (let i =0; i<h3Elements.length; ++i) {
      h3Elements[i].onclick = function (e) {
        console.log(e.target)
      }
}