
// console.log(listCoursesBlock);
let courseApi = "http://localhost:3000/courses/";

function start() {
    getCourses(renderCourses);
    handleCreateForm();
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
        return ` <li class="data-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
           <button onclick = "deleteCourse(${course.id})">Delete</button>
            </li>`
    });
    console.log(htmls);
    listCoursesBlock.innerHTML = htmls.join("");

}
function createCourse(data, callback) {
    fetch(courseApi, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json())
        .then(callback);

}
function deleteCourse(id) {
    fetch(courseApi + id, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(response => response.json())
        .then(()=> {
            let data= document.querySelector(".data-"+id);
            data.remove();
        });
}
function handleCreateForm() {
    let createBtn = document.querySelector("#create");
    createBtn.onclick = function () {
        let name = document.querySelector(`input[name="name"]`).value;
        let description = document.querySelector(`input[name="Description"]`).value;
        let formData = {
            name: name,
            description: description
        }
        createCourse(formData, getCourses(renderCourses));
        // console.log(name);
    }
}