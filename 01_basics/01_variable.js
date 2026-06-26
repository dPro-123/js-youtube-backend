
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur" // variable can assign memory without giving var,const,let //
let accountState;

//accountId = 2 // cannot change const
console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //make table//
