// //Promise?
// setTimeout(()=> {
//         console.log("1");
// },3000);
// console.log("2");

 //set up Promise 
 //1.new Promise
 //2.Executor
 let promise = new Promise(
        // Executor
        function(resolve, reject) {
                //logic
                //success : resolve()
                //failure : reject()
        }
 )
