// // // console.log(`hello world, welcome to my function`);

// // // //total a&b;
// // // function sum(a,b){
// // //      return a+b;
// // // }
// // // let total=sum(5,10);
// // // console.log(`total  is : ${total}`);

// // // arrow function.
// // console.log(`hello arrow function`);

// // // function sum(a,b){
// // //      return a+b;
// // // }
// // //------arrow function.
// // let sum = (a, b) => {
// //      return a + b;
// // }
// // //-- example
// // let hello = () => {
// //      return `hello world`;
// // }
// // console.log(hello());
// // let tich = (a, b) => {
// //      return a * b;
// // }
// // console.log(tich(4, 5));

// // let person = {
// //      name: `tran viet tien`,
// //      gender: `male`,
// //      full: function () {
// //           return `${this.name} is ${this.gender}`;
// //      }

// // }
// // console.log(`check value: `, person["name"]);
// // // --------------callback
// // let res = (a, b, callback) => {
// //      let total = a * b;
// //      ///----- setTmeout;
// //      setTimeout(()=>{
// //            callback(total)
// //      },5000)
// //      // callback(total);r
// // }
// // let printSum = (message) => {
// //      console.log(`check sum 6+9=`, message);
// // }
// // res(6, 9, printSum);

// //-------array FILTER  / FIND.
// let arr = [10,9,8,7,6,5,4,3,2,1];
// let filter= arr.filter( (item,index,array) =>{
//             console.log(`check filter =${item} ; index = ${index}`);
//             console.log(array);
//             return item&&item>5;
//             /* if (item>5){ 
//                  return true  
//           }else 
//           {
//                return false
//           }*/   
// });
// console.log(filter);
// let course = [
//      {
//           name:`java`,
//           coin : 680,
//      },
//      {
//           name:`php`,
//           coin : 700,
//      },
//      {
//           name:`javascript`,
//           coin : 850,
//      }
// ]

// let filterCourse= course.filter( (course,adsca,array) => {
//      // console.log(course);
//      // console.log(adsca);
//          return course.coin >=700
// })
// console.log(filterCourse);

// // let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// // let result = words.filter((item) => {
// //      //    return item.length > 6;
// //         console.log(typeof(item));
// // });
// // console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]
// // function Find() in js
// let cars=[
//       {
//           name:`benley`,
//           model:`asd`,
//       },
//       {
//           name:`mec`,
//           model:`add`,
//       },
//       {
//           name:`mec`,
//           model:`amsdk`,
//       },
// ]
// let res=cars.filter((res) =>{
//      return res&&res.name===`mec`;
// });
// // console.log(`check value ${res}`);
// console.log(res);

//-------MapArray
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i=0;i<arr.length;i++){
//            arr[i]=arr[i]*arr[i];
//           }
// console.log(`check value ${arr}`);
let mapArr = arr.map((item) => {
   // item=item*item;
   return item && item > 4;
})
console.log(arr);
console.log(mapArr);
let mang = [7, 4, 3, 6, 2, 1]; //  Mảng có 6 phần tử
let res = mang.reduce((previousValue, currentValue, currentIndex) => {
   // console.log(`${previousValue} & ${currentValue} & ${currentIndex}`);
   console.log(`currentIndex : ${currentIndex} and element : ${mang[`${currentIndex}`]} and previousValue : ${previousValue}`);
   return previousValue + currentValue;

})
console.log(res);
// SORT 
let months = ['march', 'jan', 'feb', 'dec'];
months.sort();
console.log(months);
let numbers = [12, 45, 1, 4, 2, 5];
// numbers.sort();
console.log(numbers);//-> 12,1, 2, 3, 45, 4, 4  
numbers.sort((item1, item2) => {
   // console.log(`check item1 = ${item1} and item2 =${item2} and value = ${item1-item2}`);
   console.log(numbers);
   return item1 - item2;
})
console.log(numbers);


let items = [
   { id: 1, name: `tien`, age: 19 },
   { id: 2, name: `sasuke`, age: 17 },
   { id: 3, name: `naruto`, age: 18 },
]
items.sort((a, b) => {
   return a.age - b.age;
});
console.log(items);

//example
// let sum =array.reduce(()=>{
//       return
// })

let persons = [
   {
      name: `tien`,
      age: 19,
      gender: `male`,
   },
   {
      name: `konoha`,
      age: 3000,
      gender: `male`
   },
   {
      name: `sarada`,
      age: 200,
      gender: `female`
   },
   {
      name: `sasuke`,
      age: 480,
      gender: `male`
   },
   {
      name: `sasuke`,
      age: 500,
      gender: `male`
   },
]
persons.sort((a, b) => {
   return a.age - b.age;
})
// list
console.log(`this is list`);
for (let i = 0; i < persons.length; i++) {
   console.log(persons[i]);
}
// console.log(persons[1].age);
// Delete a object in array
console.log(`Delete a object`);
for (let i = 0; i < persons.length; i++) {
   if (persons[i].name === `sasuke`) {
      persons.splice(i, 2);
   }
}
for (let i = 0; i < persons.length; i++) {
   console.log(persons[i]);
}

//Create a object in array
console.log(`Create a object`);
let b = { name: `uchiha`, age: 900, gender: `male` };
persons.push(b);
for (let i = 0; i < persons.length; i++) {
   console.log(persons[i]);
}

// Update a object in array
console.log(`Update a object`);
for (let i = 0; i < persons.length; i++) {
   console.log(persons[i].gender);
   if ((persons[i].gender = `male`) && (persons[i].name != `tien`)) {
      persons[i].name = `sasuke`;
   }
   // console.log(persons[i].gender);
}
console.log(`----------------------`)
for (let i = 0; i < persons.length; i++) {
   console.log(persons[i]);
}
