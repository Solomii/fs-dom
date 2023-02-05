"use strict";

// function logMessage() {
//   console.log("messege: click")
// }

// const [button]=document.getElementsByTagName("button");

// button.addEventListener("click",logMessage);

// const testSelector = document.querySelector('#test')

// const test = document.getElementById("test");
// console.log(test);

// const [input] = document.getElementsByName("input");
// console.log(input);

// const lis = document.getElementsByClassName("item")
// console.log(lis);

// const h1 = document.querySelector('h1')
// console.log(h1)

// const ps = document.querySelector("p");
// console.log(ps)

//!!!!! task

// const [img1] = document.images;
// const [img2] = document.getElementsByTagName("img");
// const img3 = document.querySelector("img");

// const ps = document.querySelectorAll(".article:nth-child(3)>p");

// const h2 = document.querySelectorAll(".article:last-child h2");

//task 2

const db = [
  "https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=768:*",
  "https://www.dogstrust.org.uk/images/1440x1080/assets/2022-07/188854sponsordogeric.jpg"
];

const image = document.querySelector(".slide>img");
image.src = db[0]

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);
