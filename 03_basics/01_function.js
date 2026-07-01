

function addTwoNumbers(number1,number2)
{
    console.log(number1+number2)
}
addTwoNumbers(3,"4")
const result=addTwoNumbers(6,7)
console.log("result:",result);// output will be undefined , because my function does not return anything


function loginUserMessage(username)
{
    if(username=== undefined)
    {
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`

}
console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());

// to add lots of value ,we use rest operator(...parametere)
function calculateCartPrice(...num1)
{
   return num1
}
console.log(calculateCartPrice(200,300,400,500,600));


const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject)
{
 console.log(`username is ${anyobject.username} and  price is ${anyobject.price}`);

}
handleObject(user)
handleObject({
    username:"sam",
    price:199

})



// array

const myNewArray=[20,10,39,57]
function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

