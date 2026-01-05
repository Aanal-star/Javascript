const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerchoice);
    let result = "";
    if (playerchoice === computerchoice) {
        result = "It's a tie"
    }
    else {
        switch (playerchoice) {
            case "rock":
                result = (computerchoice === "scissors") ? "You win" : "You lose";
                break;
            case "paper":
                result = (computerchoice === "rock") ? "You win" : "You lose";
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "You win" : "You lose";
                break;
        }
    }
    playerdisplay.textContent = `Player : ${playerchoice}`;
    computerdisplay.textContent = `Computer : ${computerchoice}`;
    resultdisplay.textContent = result;
}









// image slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
// initialize slider
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displayslide");
        intervalId = setInterval(nextslide, 5000);
    }
}
function showSlide(index) {
    // wrap around
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    });
    slides[slideIndex].classList.add("displayslide");
}
function nextslide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}
function prevslide() {
    slideIndex--;
    showSlide(slideIndex);
}









// callback hell
//situation in js where callbacks are nested within other callbacks to the degree where code is difficult to read.
//old pattern to hanndle asynchoronous function.
//use promises + async/await to avoid callback hell
//async are completed in any order .to make in order use callback

function task1(callback) {
    setTimeout(() => {
        console.log("task1 complete");
        callback();
    }, 2000)
}
function task2(callback) {
    setTimeout(() => {
        console.log("task2 complete");
        callback();
    }, 1000);
}
function task3(callback) {
    setTimeout(() => {
        console.log("task3 complete");
        callback();
    }, 3000);
}
function task4(callback) {
    setTimeout(() => {
        console.log("task4 complete");
        callback();
    }, 5000);
}
task1(()=>{
    task2(() =>{
        task3(()=>{
            task4(() =>{
                console.log("all tasks completed");
                
            })
        })
    })
});

