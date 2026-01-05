//Es6
import { PI, getCircumference, getArea, getVolume } from './MathUtil.js';
console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}`);
console.log(`${area.toFixed(2)}`);
console.log(`${volume.toFixed(2)}`);



//synchronous and asynchronous
// //syn
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

//asyn
setTimeout(() => console.log("Task 1"), 3000)
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

//asyn and syn
function func1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback()
    }, 3000)
}
function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);



//Error 
try {
    console.log(x);
}
catch (error) {
    console.log(error);
}
finally {
    //close file,connection
    console.log("This always execute");
}
console.log("End");

try {
    const dividend = Number(window.prompt("Enter divident"));
    const divisor = Number(window.prompt("Enter divisor"));
    if (divisor == 0) {
        throw new Error("Not divisible by zero");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Must be number");
    }
    const result = dividend / divisor;
    console.log(result);
}
catch (error) {
    console.log(error);
}
console.log("The end");



//DOM
document.title = "Aanal";
//for dark mode
//document.body.style.background = "black"
console.log(document);
console.dir(document);
const username = "Aanal Mehta";
const welcomemsg = document.getElementById("welcome-msg");
welcomemsg.textContent += username === "" ? `Guest`:username;



//element selector
const myheadache = document.getElementById("my-headache");
myheadache.style.backgroundColor = "Yellow";
myheadache.style.textAlign = "center";
console.log(myheadache);
const fruits = document.getElementsByClassName("fruit");
console.log(fruits);
fruits[0].style.backgroundColor = "orange"
for(let fruit of fruits){
    fruit.style.backgroundColor ="Green";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor ="Red"
})

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li")
console.log(h4Elements);
h4Elements[0].style.backgroundColor = "yellow";
// for(let h4Elements of h4Elements){
//     h4Elements.style.backgroundColor = "yellow";
// }
// for(let liElements of liElements){
//     liElements.style.backgroundColor = "aqua"
// }

const element = document.querySelector(".fruit");
element.style.backgroundColor="blue"



//dom navigation
const elements = document.getElementById("food");
const firstchild = elements.firstElementChild;
firstchild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElements => {
    const firstchild = ulElements.firstElementChild;
    firstchild.style.backgroundColor="yellow"
})

//lastelement child
const ele = document.getElementById("food");
const lastchild = ele.lastElementChild;
lastchild.style.backgroundColor = "green";

ulElements.forEach(ulElements => {
    const lastchild = ulElements.lastElementChild;
    lastchild.style.backgroundColor = "green";
})

//nextElementSibling
const elem = document.getElementById("pizza");
const nextsibling = elem.nextElementSibling;
nextsibling.style.backgroundColor="red";
//if we give id means food the whole next colddrink will be affected

//previouselementsibling
const eleme = document.getElementById("burger");
const prev = eleme.previousElementSibling;
prev.style.backgroundColor="orange"
//if we select colddrink whole food will affected

//parentelement
const el = document.getElementById("pizza");
const parent = el.parentElement;
parent.style.background ="pink"

//children
const elm = document.getElementById("food");
const children = elm.children;
console.log(children);//html collection
Array.from(children).forEach(child => {
    child.style.background="aqua"
})
children[1].style.background ="purple"