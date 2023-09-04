/**Let's do some practice with a simple exercice. You must modify the code below based on the following rules:

The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data */

//solve
function job() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(`hello world`)
        },2000)
    })
promise 
   .then((value)=> {
        return value;
   })
    // return 'hello world';
}

module.exports = job;
