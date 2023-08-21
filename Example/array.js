// /**Bài tập: Cho trước thẻ button, hãy viết code JS sao cho mỗi lần click vào button 
//  * sẽ đổi màu chữ của button lần lượt sang màu red, blue, green và sau 3 giây chỉ
//  *  đổi màu red và blue (bỏ màu green) */
// let buttonElement = document.querySelector("button");
// function red() {
//       buttonElement.classList.toggle("red");
// }
// function blue() {
//       buttonElement.classList.toggle("blue");
// }
// function green() {
//       buttonElement.classList.toggle("green");
// }
// buttonElement.addEventListener("click",()=> {
//       red();
//       // e.stopPropagation();
//       buttonElement.addEventListener("click",()=> {
//             blue();
//             buttonElement.addEventListener("click",green);
//       });
// })
// // setTimeout(()=> {
// // },3000)
let button = document.querySelector("button")
    colors = ['purple', 'yellow', 'orange', 'brown', 'black'];

button.onclick = function () {
    color = colors.shift();
    colors.push(color);

    button.style.backgroundColor = color;
};