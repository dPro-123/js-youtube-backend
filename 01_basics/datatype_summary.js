
/* two types of datatype -1> primitive and 2> non-primitive */
//primitive
//7 categories:strings,number,boolean,null,undefiend,symbol,BigInt//
//datatype declaration
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail

const id=symbol("123")
const anotherId=symbol("123")
console.log(id === anotherId)//false;symbol always give different output
const bigNumber=12345674536n
//referrence type(non-primitive)
//array,objects,functions
const heroes=["abc","def","ghi"]//array
//object
let myObj={
    name:"hitesh",
    age:22
}
//object

//function

const myFnction=function()
{
    console.log("hello world")
}
//function

//find datatype
console.log(typeof(datatype))