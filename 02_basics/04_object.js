
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn= false
console.log(tinderUser);

//nested object (objects under object)//
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhury"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

//combine object
const obj1={1:"a",2:"b"}
const obj2={3:"a",2:"b"}
const obj3=Object.assign({},obj1,obj2)
//{}is a empty object which is act as a target and obj1 and obj2 are source ,this source objects are assining to {},otherwise both object will assign in obj1 , which is not wrong , but syntactically it is better to use an empty object//
const obj4={...obj1,...obj2} // best method (spreading)
console.log(obj3);
console.log(obj4);

//when data comes from database
//ojects under array
const user=[
{
    id:1,
    email:"ggerhet"
},
{
    id:2,
    email:"yetyry"
},
{
    id:3,
    email:"aryru"
}
]
console.log(user[1].email)
console.log(user[2].id);



console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// this method took all keys or values and kept them in an array
console.log(Object.entries(tinderUser));
// make seperate arrays for keys and values[key1,value1][key2,value2].....//






