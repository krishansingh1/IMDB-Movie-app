const buttons = document.querySelectorAll("[data-carousel-button]");
const slide = document.querySelector(".slide");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log(button);