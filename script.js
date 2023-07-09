//Carousel

const buttons = document.querySelectorAll("[data-carousel-button]");
const slide = document.querySelector(".slide");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log(button);
        const offSet = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        // console.log(slides.children);
        const activeSlide = slides.querySelector("[data-active]");
        // console.log(activeSlide);
        let newIndex = [...slides.children].indexOf(activeSlide) + offSet;
        // console.log(newIndex);
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

// Search Bar

//<ul>
//    <li>JavaScript</li>
//    <li>React Js</li>
//    <li>Node Js</li>
//</ul>

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
let apiUrl;

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        apiUrl = `http://www.omdbapi.com/?t=${input}&apikey=53207a9e`;
    }

    $.get(apiUrl)
}





