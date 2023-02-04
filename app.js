"use strict";

function counterMaker(params){
    let count = 0;
   return function name() {
        // eval(count + params)
        console.log(count); 
    }
}
const counter = counterMaker()
// console.log( counter() ) // 0
// console.log( counter() ) // 0
console.log( counter(1) ) // 1
// console.log( counter() ) // 1
// console.log( counter(3) ) // 4
// console.log( counter(7) ) // 11
// console.log( counter(-5) ) // 6