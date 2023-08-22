// // //Promise?
// // setTimeout(()=> {
// //         console.log("1");
// // },3000);
// // console.log("2");

//  //set up Promise 
//  //1.new Promise
//  //2.Executor
//  let promise = new Promise(
//         // Executor
//         function(resolve, reject) {
//                 //logic
//                 //success : resolve()
//                 //failure : reject()
//                 resolve([
//                         {
//                                 id : 1,
//                                 name:`tran viet tien`
//                         }
//                 ]);
//         }
//  )
//  promise 
//     .then(fucntion(person) {   // resolve() is called
//                 console.log(person);
//     } )
//     .catch(fucntion() {  //reject()     is called
//                 console.log("failure")
//     } )
//     .finally(fucntion() { 
//                 console.log("done")
//     } )

new Promise(function(resolve, reject) {

        setTimeout(() => resolve('em yêu anh'), 5000); // (*)
        
        }).then(function(result) { // (**)
        
        alert(result); // em yêu anh
        return 'kiss thôi...';
        
        }).then(function(result) { // (***)
        
        alert(result); // kiss thôi
        return 'xxx thôi';
        
        }).then(function(result) {
        
        alert(result); // xxx thôi 
        return 'oh yea baby'; //kakakakak
        
        })
        