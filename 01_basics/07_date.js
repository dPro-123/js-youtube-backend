let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate=new Date(2023,0,23)
let myCreateDate=new Date(2023,0,23,5,3)
console.log(myCreateDate.toDateString());

let myCreateDate=new Date("01-14-2023")
console.log(myCreateDate.toDateString());

//timestamp
let myTimeStamp=Date.now()
console.log(myTimeStamp);

/*always compare time in miliseconds*/
let newDate=new Date()
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday:"long",
    //timeZone:''
})



