"use strict";

// function counterMaker() {
//   let count = 0;
//   return function name(params = 0) {
//     return (count += params);
//   };
// }
// const counter = counterMaker();
// console.log(counter()); // 0
// console.log(counter()); // 0
// console.log(counter(1)); // 1
// console.log(counter()); // 1
// console.log(counter(3)); // 4
// console.log(counter(7)); // 11
// console.log(counter(-5)); // 6

function counterMaker() {
    let count = 0;
    return function name(params = 0) {
      console.log(count += params);
    };
  }
  const counter = counterMaker();
  console.log(counter()); // 0
  console.log(counter()); // 0
  console.log(counter(1)); // 1
  console.log(counter()); // 1
  console.log(counter(3)); // 4
  console.log(counter(7)); // 11
  console.log(counter(-5)); // 6
  