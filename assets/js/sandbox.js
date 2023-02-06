"use strict";

// let count = 0;
// function counter() {
//     count++;
//     return count;
// }

//incatculation

// function createCounter(initialValue=0) {
//     let count = initialValue; //замкнута змінна
//     return function counter() {
//         count++;
//         return count;
//     };
// }

// const counter1 = createCounter();
// const counter2 = createCounter(30);
// const counter3 = createCounter(10);

// function creatCounter2(initialValue) {
//     let count = initialValue;
//     return {
//         increment() {
//             return ++count;
//         },
//         decrement() {
//             return --count;
//         },
//     };
// }

// const countertest = creatCounter2();


// напишіть фукцію, яка повертає іншу функцію


function createAdder(initialValue=0) {
  // let result=initialValue;
  // return function(value1){
  //   return result += value1;
  // }
  return function(value){
    return initialValue += value;
  }
}

const createAdderArrow = (initial) => (value) =>(initial+=value)

const adder1 = createAdder(100);
const adder2 = createAdderArrow(100);
