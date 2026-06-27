
const name="hitesh"
const repoCount=50
//console.log(name+repocount+"value")//old technique

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//new technique(string interpolation)

const gameName=new String('hitesh')//string declaration using object declaration// 

console.log(gameName[0]);//h
console.log(__proto__);//object
console.log(gameName.length);//5
console.log(gameName.toUpperCase());//HITESH,does not change actual string
console.log(gameName.charAt(2))//t
console.log(gameName.lastIndexOf('t'))//2
const newgameName=gameName.substring(0,3)
console.log(newgameName);//hit
const newgameName1=gameName.slice(-6,3)//we can use negative indexing only in slice
console.log(newgameName1);//hit

const newString1="  hitesh "
console.log(newString1);
console.log(newString1.trim());//remove space

const url="https://hitesh.com/hitesh%20chowdhury"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));//true,chcek the string exist or not
console.log(url.includes('sundar'));//false








