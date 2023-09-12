let postApi = ` https://jsonplaceholder.typicode.com/todos/`;
let temp;
fetch(postApi)
    .then((response) => {
        return response.json();
    })
    .then((posts) => {
        // console.log(posts);
        let html = "";
        html = posts.map((post) => {
            return `<ul>${post.id}  <li>${post.title}</li> </li></ul>    `

        })
        let htmls = html.join(``);
        alert("success!");
        document.getElementById("data").innerHTML = htmls;

    })
    .catch(() => {
        alert("can't get data from this api");
    })


