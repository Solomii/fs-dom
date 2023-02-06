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

const DEFAULT_DIR = "next";

const db = [
    {
        src: "https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg",
        alt: "dog",
        title: "title dog",
    },
    {
        src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=768:*",
        alt: "dog2",
        title: "title dog",
    },
    {
        src: "https://www.dogstrust.org.uk/images/1440x1080/assets/2022-07/188854sponsordogeric.jpg",
        alt: "dog3",
        title: "title dog",
    },
];

const slider = new Slider(db);

const image = document.querySelector(".slide>img");
function updateView() {
    // image.src = db[slider.currentIndex]
    // image.src = slider.currentSlide;
    image.setAttribute("src", slider.currentSlide.src);
    image.setAttribute("alt", slider.currentSlide.alt);
    image.setAttribute("title", slider.currentSlide.title);
}

const [prevBtn, nextBtn] = document.querySelectorAll(
    ".slider-container button"
);

const handlerBtnSlider =
    (derection = DEFAULT_DIR) =>
    () => {
        slider.currentIndex =
            slider[derection === DEFAULT_DIR ? "nextIndex" : "prevIndex"];
        updateView();
    };

// prevBtn.addEventListener("click", ()=>{
//   slider.currentIndex = slider.prev;
//   updateView()
// })
// nextBtn.addEventListener('click',()=>{
//   slider.currentIndex = slider.next;
//   updateView()
// })

prevBtn.addEventListener("click", handlerBtnSlider("prev"));

nextBtn.addEventListener("click", handlerBtnSlider("next"));

const uniq = document.getElementById("uniq");

// uniq.addEventListener("click", handlerBtnUniq);
// uniq.addEventListener("click", logValue);
// uniq.addEventListener("click", showBtn);
uniq.addEventListener("myEvent123", handlerBtnUniq);
uniq.dispatchEvent(new Event ("myEvent123"))

function handlerBtnUniq() {
    console.log("handlerBtnUniq");
    uniq.removeEventListener("click", handlerBtnSlider);
}

// function logValue() {
//     console.log("logVlue");
//     uniq.removeEventListener("click", showBtn);
// }

// function showBtn() {
//     console.log("showBtn");
// }
