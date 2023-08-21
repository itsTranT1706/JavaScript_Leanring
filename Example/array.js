// // /**Bài tập: Cho trước thẻ button, hãy viết code JS sao cho mỗi lần click vào button 
// //  * sẽ đổi màu chữ của button lần lượt sang màu red, blue, green và sau 3 giây chỉ
// //  *  đổi màu red và blue (bỏ màu green) */


// // let buttonElement = document.querySelector("button");
// // function red() {
// //       buttonElement.classList.toggle("red");
// // }
// // function blue() {
// //       buttonElement.classList.toggle("blue");
// // }
// // function green() {
// //       buttonElement.classList.toggle("green");
// // }
// // buttonElement.addEventListener("click",()=> {
// //       red();
// //       // e.stopPropagation();
// //       buttonElement.addEventListener("click",()=> {
// //             blue();
// //             buttonElement.addEventListener("click",green);
// //       });
// // })
// // // setTimeout(()=> {
// // // },3000)
// let button = document.querySelector("button")

// function changeColor() {
//       let colors = [`red`,`blue`,`green`];
//       let color = colors.shift();
//       colors.push(color);
//       button.style.color = color;
      
// }
// button.addEventListener("click",changeColor())
// setTimeout(()=> {
//       colors = [`red`,`blue`];
//       button.onclick = function () {
//             color = colors.shift();
//             colors.push(color);
//             // console.log(colors);
//                   button.style.color = color;
//         };
// },3000)

let button = document.querySelector(`button`);
const arrColors= [`red`,`blue`,`green`];
let initialLength = arrColors.length;
let indexColor = 0;
function changeColor() {
            let flagClearChangeColor;
            console.log(`index of ${indexColor}`)
            console.log(`arrColors = ${arrColors}`)
            button.style.color=arrColors[indexColor];
            indexColor++;
            // console.log(`index = ${indexColor}`)
            if (indexColor>=initialLength) {
                  indexColor=0;
            }
            flagClearChangeColor = setTimeout(()=> {
                  arrColors.pop();
                  
            },3000);
            if (arrColors.length!==initialLength) {
                 clearTimeout(flagClearChangeColor);
                 console.log(`clear!`)
            }
}

button.addEventListener("click",changeColor)