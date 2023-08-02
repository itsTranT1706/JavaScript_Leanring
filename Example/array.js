document.write(`<h1></h1>`);
let nodeTag= document.querySelector("h1");
nodeTag.setAttribute("class","heading");
let nodeHeading = document.querySelector(".heading");
Object.assign(nodeHeading.style, {
    width :"100px",
    height :"100px",
    color:"white",
})
nodeHeading.innerHTML="tran viet tien";

nodeHeading.classList.add("pink");
let i=0;
setInterval(()=> {
            if (i<10) {
                nodeHeading.classList.toggle("black");
                i++;
            }
            else {
                clearInterval();
            }
            
},500)

console.log(nodeHeading.style)