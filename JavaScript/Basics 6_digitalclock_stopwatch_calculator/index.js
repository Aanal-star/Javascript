// digital
function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

// stopwatch
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elaspedTime = 0;
let isRunning = false;
function start() {
    if (!isRunning) {
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update, 10);
        console.log(timer);
        isRunning = true;
    }
    console.log(startTime);
}
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elaspedTime = Date.now() = startTime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    startTime = 0
    elaspedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}
function update() {
    const currentTime = Date.now();
    elaspedTime = currentTime - startTime;
    let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elaspedTime / (1000 * 60) % 60);
    // let seconds = Math.floor(elaspedTime / (1000 % 60));
let seconds = Math.floor((elaspedTime / 1000) % 60);
    let milliseconds = Math.floor(elaspedTime % 1000 / 10);
    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}


//calculator
const displays = document.getElementById("displays");
function appendToDisplay(input){
displays.value += input;
}
function clearDisplay(){
displays.value = "";
}
function calculator(){
    try{
displays.value = eval(displays.value);

    }
    catch(error){
displays.error = "Error"
    }
}