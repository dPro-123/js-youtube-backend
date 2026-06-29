//merge two array
const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
marvel_heroes.push(dc_heroes)//push technique
console.log(marvel_heroes);

const allHeroes=marvel_heroes.concat(dc_heroes)//concat technique
console.log(allHeroes);

const all_new_heros=[...marvel_heroes,...dc_heroes] //spread technique

console.log(all_new_heros);
const another_array=[1,2,3,[4,5,6],7,[8,9[10,11,12]]]
const real_another_array=another_array.flat(Infinity)//make it into a single array
console.log(real_another_array); 


console.log(Array.isArray("Hitesh"))// check an array exist or not

console.log(Array.from("Hitesh"));//['H','i','t','e','s','h']
console.log(Array.from({name:"hitesh"}));//interesting





