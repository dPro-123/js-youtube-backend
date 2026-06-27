
//nums
const balance=new Number(100)//explicitly declare datatype
console.log(balance);

console.log(balance.toString());//convert into string
console.log(balance.toString().length())//3
console.log(balance.toFixed(2))//100.00,fixed number of 0 after .

const otherNumber=123.869
console.log(otherNumber.toPrecision(3))//fixed number of didgits

const otherNumber=1123.869
console.log(otherNumber.toPrecision(3))//fixed number of digits

const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'))//

//maths
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());





