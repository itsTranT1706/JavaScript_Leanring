let postApi =  ` https://jsonplaceholder.typicode.com/todos/`;
let temp;
fetch(postApi)
        .then((response)=> {
            return  response.json();
        })
        .then((post)=> {
         console.log(post);
        })
        
    
