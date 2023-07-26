// // // // // let car = ["mec", "toyota", "huyndai", ""];
// // // // // person = [
// // // // //     "Tien",
// // // // //     "Tung",
// // // // //     "bot",
// // // // // ]
// // // // // //------------- create a array
// // // // // const home = [];
// // // // // home[0] = "chungcu";
// // // // // home[1] = "homestay";

// // // // // // console.log(typeof(car));
// // // // // // console.log(car[1]);
// // // // // // console.log(`hello world`);

// // // // // console.log(`who is the best? it's ${person[0]}`);
// // // // // console.log(home);
// // // // // let c = [
// // // // //     {
// // // // //         name: "Tien",
// // // // //         age: " 19",
// // // // //         gender: "male",

// // // // //     },
// // // // //     {
// // // // //         name: "Tung",
// // // // //         age: " 24",
// // // // //         gender: "male",

// // // // //     }
// // // // // ];
// // // // // // console.log(`who is the best ? it's ${c[0].name}`);

// // // // // //------Js_comparision (so sánh)
// // // // // let a = 5;
// // // // // let b = "5";
// // // // // console.log(`compare  a, b with ==: a = ${a} and b = ${b}\nresult: ${a == b}`);
// // // // // console.log(`compare  a, b with === : a = ${a} and b = ${b}\nresult: ${a === b}`);
// // // // // //------------empty,null,undefined
// // // // // let tam = {};
// // // // // console.log(`check value : ${tam}`);

// // // // // console.log(`----------------`);
// // // // // let employees = [
// // // // //     {
// // // // //         name: `thing`,
// // // // //         age: 19,
// // // // //     },
// // // // //     {
// // // // //         name: `hiroshima`,
// // // // //         age: 20,
// // // // //     },
// // // // //     {
// // // // //         name: `maria`,
// // // // //         age: 22,
// // // // //     },
// // // // // ]
// // // // // let content = ``;
// // // // // for (let item of employees) {
// // // // //     // content += `<li>` +item.name +`</li>`;
// // // // //     console.log(item.name, item.age)
// // // // // }
// // // // // console.log(content);

// // // // // let tien = {
// // // // //     age: 20,
// // // // //     gender: `male`,
// // // // //     career: `developer`,
// // // // // }
// // // // // console.log(tien.age)
// // // // // for (let key in tien) {
// // // // //     console.log(key);
// // // // // }
// // // // // console.log(`-------------------------`)
// // // // // let arr = [`tien`, `tung`, `uchiha`];
// // // // // console.log(arr[`1`])
// // // // // console.log(`--------------------------`)
// // // // // let item = `sasuke`;
// // // // // arr.push(item);
// // // // // let addItem = [`chichi`, `papa`];
// // // // // let count = 0;
// // // // // // console.log(count)
// // // // // for (let element of arr) {
// // // // //     console.log(element);
// // // // //     count++;
// // // // //     console.log(`------print count ${count}`);
// // // // //     console.log(`------print length array ${arr.length}`)
// // // // //     if (count === (arr.length - 1)) {
// // // // //         arr.concat(addItem);
// // // // //         for (let item of arr) {
// // // // //             console.log(`error`)
// // // // //             console.log(item)
// // // // //             // console.log(arr.length)
// // // // //         }
// // // // //         //  break;
// // // // //     }

// // // // // }

// // // // // // console.log(`-------------`)
// // // // // // for (let element of arr){
// // // // // //     console.log(element);
// // // // // // }


// // // // // //   JS F8
// // // // // // confirm(`are u enough age  `);// yes or no for a message ( ok / cancel)
// // // // // // prompt(`u type ur age in form,please  `)// create a form to confirm ( '" nhập ..." cancel and ok) -> cửa sổ hộp thoại
// // // // // //  setTimeout(() => {
// // // // // //           alert(`notification   `)
// // // // // //  }, 3000);
// // // // // //  //or
// // // // // //  setTimeout(function (){
// // // // // //             alert(` time's up`)
// // // // // //  }, 10000);

// // // // // //  let age=35;
// // // // // //  console.log(age++)
// // // // // // let firstName =` tien `;
// // // // // // let lastName =` tran `;
// // // // // // console.log(`call me is ${lastName} ${firstName}`); // using template string
// // // // // // let secondName=` viet `;
// // // // // // let fullName ;
// // // // // // firstName += lastName + secondName ;
// // // // // // console.log(firstName);
// // // // // // console.log(` my name is ${firstName}`)

// // // // // // let age=20;
// // // // // // let canBuyAlcohol =age>=18;
// // // // // // console.log(canBuyAlcohol);
// // // // // // let a1=-1;
// // // // // // let b1=2;
// // // // // // let c1=3;
// // // // // // if  (a1>>c1 && b1>>0){
// // // // // //     console.log(a1>>c1);
// // // // // //     console.log(b1>>c1);
// // // // // // }
// // // // // // else {
// // // // // //     console.log(  `incorrect`)
// // // // // // }

// // // // // //  let x=1;
// // // // // //  let y=2;
// // // // // //  let fullName=  "tran viet \"tien"
// // // // // //  console.log(fullName);
// // // // // //  let myfunction =   function(){
// // // // // //        console.log(`hello world`)
// // // // // //  }
// // // // // //  let object = {
// // // // // //       name:`tien`,   //key -- value
// // // // // //       age:20,
// // // // // //       career:`developer`, 
// // // // // //       temp  : function(){
// // // // // //            console.log(` hello world`)
// // // // // //       }
// // // // // //  }
// // // // // //  console.log(object.temp())
// // // // // // let arr1 = [ `javascript`,`php`,`java`,`python`]
// // // // // // console.log(arr1)
// // // // // // let  result  = `A`||`B`||`C`||`D`;
// // // // // // console.log(`result is : ${result}`) 

// // // // // // create a function
// // // // // console.log(`--------------CREATE A FUNCTION--------`);
// // // // // function myFunction(){
// // // // //             console.log(`this is my function  `)
// // // // // }
// // // // // let myfunction1 = ()=>{
// // // // //         console.log(`this is arrow function`)
// // // // // }
// // // // // function    showDialog() {
// // // // //             alert(`hello everyone`);

// // // // // }
// // // // // let total = (a,b) =>{
// // // // //       return a+b;
// // // // // }
// // // // // console.log(`2+3= ${total(2,3)}`)
// // // // // function writeLog(){
// // // // //      let myString='';

// // // // //      for (let para of arguments){
// // // // //         myString+=para+`-`;
// // // // //       }
// // // // // //      if (myString.substring(myString.length-1)===`-`){
// // // // // //         myString=myString.slice(0,-1)
// // // // // //      }
// // // // // //      console.log(myString);
// // // // // // }
// // // // // // let string=`tran`;
// // // // // // writeLog(1,2,3,4,5);
// // // // // // let result= (a,b)=>{
// // // // // //     alert();
// // // // // //     console.log("hellu");
// // // // // //     return a+b;
// // // // // }
// // // // // // console.log(result(2,3));

// // // // // //METHOD STRING;

// // // // // let yourString  = `hello js welcome to js basic js`;
// // // // // // length.
// // // // // console.log(yourString.length);  //   độ dài của chuỗi  .length

// // // // // // find index
// // // // // console.log(yourString.indexOf(`js`,yourString.indexOf(`js`)+1));// vị trí của chuỗi con trong chuỗi mẹ .indexOf
// // // // // console.log(yourString.lastIndexOf(`js`))
// // // // // console.log(yourString.search(`js`))

// // // // // // cut string
// // // // // console.log(yourString.slice(-4));

// // // // // // replace;
// // // // // console.log(yourString.replace(`js`,`java`))  //hello java welcome to js basic js
// // // // // //-> biểu thức chính quy
// // // // // console.log(yourString.replace(/js/g,`java`)) // hello java welcome to java basic java

// // // // // //convert to upper case
// // // // // console.log(yourString.toUpperCase())
// // // // // //convert to lower case
// // // // // console.log(yourString.toLowerCase());

// // // // // //trim
// // // // // let strings=`   hello world      `;
// // // // // console.log(strings.length);
// // // // // console.log(strings.trim().length);

// // // // // //split
// // // // // let string=` java, php, ruby, javascript`;
// // // // // console.log(typeof(string.split()));
// // // // // console.log(string.split(`, `));
// // // // // let language = `javascript`;
// // // // // console.log(language.split( ``,2)); //  (2) ['j', 'a']

// // // // // // get  a character by index
// // // // // let string1=`javascript`;
// // // // // console.log(typeof(string1.charAt(100)));
// // // // // console.log(string1.charAt(100).length);
// // // // // console.log(string1[1]);
// // // // // console.log(string1.charAt(4))
// // // // Array.prototype.myEach = function (callback) {
// // // //     for (let index in this)
// // // //     {
// // // //         callback(index);
// // // //     }
// // // // }

// // // // let arr = [1,2,3,4,5];
// // // // console.log(arr.myEach((item)=>{
// // // //     return item;
// // // // }))
// // // let healingNode  =  document.getElementsByClassName(`heading`);
// // // if (healingNode===null)  {
// // //     console.log(`toang roii`);

// // // } 
// // // else { 
// // //     console.log(typeof(healingNode));
// // //     console.log(healingNode.length);    
// // // }

// // // let node = document.getElementsByTagName(`p`);
// // // console.log(node);
// // /**
// //  * Sử dụng các biến đã cho sẵn dưới đây
// //  */

// // let productsListElement = document.getElementsByClassName("products-list")[0];
// // let firstProductElement = document.querySelector(".products-list .product:first-child");
// // let buttonElements = document.querySelectorAll("button")

// // let getTag = document.querySelector(".box-1 ");
// // let res = getTag.getElementsByTagName("li");
// // console.log(getTag);
// // for (let i = 0; i < res.length; ++i) {
// //         console.log(res[i]);
// // }

// let name = `tran viet tien`;
// let obj = {
//         name : `Tran Viet Tien`,
//         age :19,
//         show : function () {
//                 document.write(`<h1>Xin chào bạn ${this.name}</h1>`)
//         }
// }
// document.write(name);
// document.write(`<h2>Tran viet tien</h2>`);
// obj.show();
// let tag = document.querySelector("h1");
// tag.setAttribute("style","color:pink");
// obj.show();

// console.log(tag);
// console.log(tag.getAttribute("style"));

// let temp = `<h2 style= "color:blue">hello world</h2>`;

// document.write(temp);
// document.write(temp);
let tagName = document.querySelector("h1");
let tagName1 = document.querySelector("p");
tagName.setAttribute("title","F8 - Học lập trình để đi làm");
tagName.setAttribute("data-title","F8 - Học lập trình để đi làm");
let tag = tagName1.querySelector("a");
tag.setAttribute("href","https://fullstack.edu.vn/");
tag.setAttribute("target","_blank");
console.log(tagName);
console.log(tag);
