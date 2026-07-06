//immediately invoked function expectation (IIFE)
// why is it used?
// for immediate execution
// to remove global pollution , we use iife
(function chai(){
    console.log(`DB Connected`);
    
})();

// syntax-> (function)(exeution) 
//we can use arrow function also in iife

(()=>{
    console.log(`DB Connected`);
    
})();

(()=>{
    console.log(`DB Connected`);
    
})();
// use parameter in arrow function
((name)=>{
    console.log(`DB Connected ${name}`);
    
})("hitesh");

