// let arrTag = document.querySelectorAll("div");
// arrTag.forEach((item) => {
//     item.classList.add("box");
//     return item;
// })
// console.log(arrTag)

//solution 2:
let htmlCollection = document.getElementsByTagName("div");
let arrTag = Array.from(htmlCollection);
arrTag.forEach((item) => {
    item.classList.add("box");
    return item;
})
console.log(arrTag);