
// console.log(listCoursesBlock);
let courseApi = "http://localhost:3000/courses";

function start() {
    getCourses(renderCourses)
}
start();
function getCourses(callback) {
    fetch(courseApi)
    .then(response => response.json())
        .then(callback);

}
function renderCourses(courses) {
    let listCoursesBlock = document.querySelector("#list-courses");
    let htmls = courses.map((course) => {
        return ` <li>`+
        `<h4>${course.name}</h4>`+
        `<p>${course.description}</p>`+
        `</li>`
    });
    console.log(htmls);
    listCoursesBlock.innerHTML = htmls.join("");

}
