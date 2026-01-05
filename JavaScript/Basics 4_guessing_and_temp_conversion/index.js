//number guessing 
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;
let running = true;
while (running) {
    guess = window.prompt(`Guess number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("Ente valid number");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Ente valid number");
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Too low try again");
        }
        else if (guess > answer) {
            window.alert("Too high try again");
        }
        else {
            window.alert(`Correct , it tooks ${attempts} attempts`);
            running= false;
        }
    }
}

//temperature conversion 
const textbox = document.getElementById("textbox");
const tofahrenhite = document.getElementById("tofahrenhite");
const tocelcius = document.getElementById("tocelcius");
const result = document.getElementById("result");
let temp;
function convert() {
    if (tofahrenhite.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(0) + "°F";
    }
    else if (tocelcius.checked) {
   temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp + "°C";
    }
    else {
        result.textContent = "Select Unit";
    }
}