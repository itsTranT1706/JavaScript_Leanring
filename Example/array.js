/**Bài tập: Cho trước thẻ button, hãy viết code JS sao cho mỗi lần click vào button 
 * sẽ đổi màu chữ của button lần lượt sang màu red, blue, green và sau 3 giây chỉ
 *  đổi màu red và blue (bỏ màu green) */
let buttonElement = document.querySelector("button");
function red() {
      buttonElement.classList.add("red");
}
function blue() {
      buttonElement.classList.add("blue");
}
buttonElement.addEventListener("click",red)
// buttonElement.removeEventListener("click",red)
buttonElement.addEventListener("click",blue)
// buttonElement.addEventListener("click",green)