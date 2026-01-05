// //Calculating the circumference 
// const PI = 3.14159;
// //if we use const then that value is fixed it cann't change and if we use let its value can change
// let radius;
// let circurference;
// document.getElementById("mysubmit").onclick = function () {
//     radius = document.getElementById("mytext").value;
//     radius = Number(radius);
//     circurference = 2 * PI * radius;
//     document.getElementById("myh3").textContent = circurference;
// }

//Counter Program
const decreseBtn = document.getElementById("decreaseBtn");
const reset = document.getElementById("reset");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
reset.onclick = function(){
    count=0;
    countLabel.textContent = count;
}