
const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.username},welcome to website`);//this->current context
        
    }
}
//user.welcomeMessage()
user.username="sam"
//user.welcomeMessage()



//function chai()
{
    let username="hitesh"
    console.log(this.username);// undefined
    
}
//chai()



//const chai=function()
{
    let username="hitesh"
    console.log(this.username);// undefined
    
}
//chai()


//const chai=() => //arrow function
{
    let username="hitesh"
    console.log(this.username);// undefined
    
}
//chai()


//Question : why arrow function not worked in arrow function ? and comparision betwwen arrow function and regular function regarding this function//

// arrow function 
//const addTwo=(num1,num2)=>
//{
  //  return num1+num2
//}
//console.log(addTwo(3,4));

//implicit arrow function (we dont use {} parenthesis)
const addTwo=(num1,num2)=> num1+num2

console.log(addTwo(3,4));


const addTwO=(num1,num2)=> (num1+num2)

console.log(addTwO(3,4));







