//stringtify / Parse
let a = `1`;
let person = {
    name :  `tien`,
    age :19,
}
console.log(JSON.stringify(person));
console.log(JSON.parse(a));
console.log(typeof(JSON.parse(a)))