//solution 1:
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
let html = "";
function render(courses) {
    let target = document.querySelector(".courses-list");
    let html = courses.reduce((res, item) => {
        return `${res} <li>${item}</li>`
    }, "")
    target.innerHTML = html;
    return target;
}
render(courses);

// //solution 2:
// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
// let html = "";
// function render(courses) {
//     let target = document.querySelector(".courses-list");
//     for (let item of courses) {
//        html +=`<li>${item}</li>`;
//     }
//     target.innerHTML=html;
//     return target;
// }

// render(courses)

