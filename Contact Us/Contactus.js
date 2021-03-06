const slidePage = document.querySelector(".slidepage");
const firtNextBtn = document.querySelector(".nextBtn");

const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");

const prevBtnThird = document.querySelector(".prev-2");
const submitBtn = document.querySelector(".submit");

const progressText = document.querySelectorAll(".step .p-form");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 3; 
let current = 1; 


// Forward buttons
firtNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1; 
});

// Second Forward Button (also covers the pink bar moving forward and check appearing)
nextBtnSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "-50%"
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});

submitBtn.addEventListener("click", function() {
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function(){
        alert("Thank you for your feedback! We will aim to reply in 3-5 days on your biscuit-related comments :).");
        location.reload();
    }, 800);
});

// Previous buttons
prevBtnSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "-0%"
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function() {
    slidePage.style.marginLeft = "-25%"
        bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});

// Submit button