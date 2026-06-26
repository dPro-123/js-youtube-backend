
let score = 33
let score1="33"
console.log(typeof(score)) // number
console.log(typeof score1) //string

let valueInNumber= Number(score1)//change string to number
console.log(typeof valueInNumber)
console.log(valueInNumber)//Nan

let score2="33abc"
let valueInNumber1= Number(score2)
console.log(typeof valueInNumber1)

let score3= null
console.log(typeof score3)
let valueInNumber2= Number(score3)
console.log(typeof valueInNumber2)

let isloogedIn=1
let booleanIsLoggedIn=Boolean(isloogedIn)
console.log(booleanIsLoggedIn) // 1=>true ,0=>false ," "=>false,"hitesh"=>true
//"33"=>33
//"33abc"=>Nan
//true=>1; false=>0
/* convert to string */
let number=33
let stringNumber=string(number)
console.log(stringNumber)
console.log(typeof(stringNumber))





