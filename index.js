'use strict'

function logMessage() {
  console.log("messege: click")
}

const [button]=document.getElementsByTagName("button");

button.addEventListener("click",logMessage);

const testSelector = document.querySelector('#test')

const test = document.getElementById("test");
console.log(test);

const [input] = document.getElementsByName("input");
console.log(input);

const lis = document.getElementsByClassName("item")
console.log(lis);

const h1 = document.querySelector('h1')
console.log(h1)


const ps = document.querySelector("p");
console.log(ps)