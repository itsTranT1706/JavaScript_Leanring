// /**:Bài toán: sau 1 giây log ra 1,2,3,4 */

// //callbackHell
// console.log("--------callback-------");
// function sleep(ms) {
//     setTimeout(() => {
//         console.log(1);
//         setTimeout(() => {
//             console.log(2);
//             setTimeout(() => {
//                 console.log(3);
//                 setTimeout(() => {
//                     console.log(4)
//                 }, ms);
//             }, ms);
//         }, ms);
//     }, ms);
// }
// sleep(1000)

//by Promise
console.log("-------Promise--------");
function unsleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
unsleep(1000)
        .then(()=> {
            console.log("1");
            return unsleep(1000);
        })
        .then(()=> {
            console.log("2");
            return unsleep(1000);
        })
        .then(()=> {
            console.log("3");
            return unsleep(1000);
        })
        .then(()=> {
            console.log("4");
            return unsleep(1000);
        })