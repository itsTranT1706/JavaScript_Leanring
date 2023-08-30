let promise1 = Promise.resolve(`success!`);
promise1
        .then((res)=> {
            console.log(res);
        })

let promise2 = Promise.reject("error!");
promise2    
        .catch((res)=> {
            console.log(res);
        })

let promise3 = Promise.all([promise1]);
promise3 
            .then ((res)=> {
                console.log((res));
            })