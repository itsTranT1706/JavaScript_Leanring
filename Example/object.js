const car = { type: "Fiat", model: "500", color: "white" };
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(`hello world`);
// console.log(car.model);
console.log(`the model of car is `, car.model);
console.log("-------------------------------");
console.log(`the ${car.type} is ${car.color} very beautifully!!`);
//-------------------------------------------------declareVip
// const dish ={
//         name :"banh trang tron",
//         size    :"L",
//         price  :"15K",
// };
// console.log(`welcome to my restaurant!!`);
// // console.log(`the size of ${dish.name} is ${dish.size} and the price of ${dish.name} is ${dish.price}  `);
// // console.log(`the price of ${dish["name"]} is ${dish["price"]}` );
// -------------------example 3
const blog1 = {
        id: "0",
        name: "TranvietTien_akai",
        status: "1",
},
        blog2 = {
                id: "1",
                name: "TranvietTien_isekai",
                status: "0",
                fullname: function () {
                        return this.id + " " + this.name;  // "THIS"  refer "blog2"  ,"RETURN" phải trả giá trị khi dùng hàm
                        // console.log(`hello im Tien`);
                },
                temp :function(){
                        return `the ${this.name} have the id is ${this.id}` ;
                }
        }
let x="name";
     blog2[x]="Tran viet tien";
// console.log(`call function : `, blog2.fullname());
        // console.log(`hello world , welcome to example 3`);
        // console.log(`the blog1 have  id = ${blog1.id}`);
        // console.log(`the blog2 have id = ${blog2["name"]}`);
        console.log(blog2.temp());
        // console.log(x);
// example
let obj  = {
     name:  `tien`,
     age   :` 19`,
     gender:`male`,
     temp : function(){
         return "hello world this is my function";
     }
}
console.log(obj.name);
console.log(obj.temp());
console.log(obj[`name`]);
console.log(obj["temp()"]);






