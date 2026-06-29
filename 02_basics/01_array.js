//array
//array declaration
const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","nagraj"]
const myArr2=new Array(1,3,4,5)
//array declartaion
console.log(myArr[0]);

//array methods
myArr.push(6)
console.log(myArr);//[0,1,2,3,4,5,6]
myArr.pop()//pop last element of array
myArr.unshift(9)//add 9 at first 
myArr.shift()//pop first element

console.log(myArr.includes(9));//check value exist
console.log(myArr.indexOf(3));//check index of value

//slice and splice
console.log("A",myArr); //A[0,1,2,3,4,5]
const myn1=myArr.slice(1,3)

console.log(myn1);//[1,2]
console.log("B",myArr);//B[0,1,2,3,4,5]

const myn2=myArr.splice(1,3)
console.log(myn2)//[1,2,3]
console.log("C",myArr)//[0,4,5]

/* *** difference between slice and splice? => slice temporarily change original array(0,range-1) , but splice permenently change original array(0,range)*** */

//--------------*---------------//
