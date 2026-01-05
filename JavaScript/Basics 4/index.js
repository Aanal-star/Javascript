//while loop
// let anyname = "";
// while (anyname == "" || anyname == null) {
//     anyname = window.prompt(`Enter nameeeeeeee`);
// }
// console.log(`Hello ${anyname}`);
// let login = false;
// let username;
// let password;

// while (!login) {
//     username = window.prompt("Enter username").trim();
//     password = window.prompt("Enter password").trim();

//     if (username === "myUsername" && password === "myPassword") {
//         login = true;
//         console.log("You are login");
//     } else {
//         console.log("You are not login");
//     }
// }

//for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue;
    }
    else {
        console.log(i);

    }
}

//function
function happyBirthday(username, age) {
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to ${username}!!`);
    console.log(`You are ${age} years old now!!!`);
}
happyBirthday("Aanal", 20);
happyBirthday("Dhairya", 17);

function add(x, y) {
    let result = x + y;
    return result;
}
let answer = add(2, 3);
console.log(answer);

function sub(x, y) {
    return x - y;
}
console.log(sub(3, 2));

function isEven(number) {
    // if (number % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false
    // }
    return number % 2 ===0 ? true : false;
}
console.log(isEven(20));

function isvalidemail(email){
     return email.includes("@") ? true : false;
}
console.log(isvalidemail("asdgmail.com"));

//variable scope(local,global)
function function1(){
    let x = 1;
    console.log(x); 
}
function function2(){
    let x = 2;
    console.log(x);
    
}
let z = 4;
function function2(){
    let z=2;
    console.log(z);
    
}
function function2(){
    let z=3;
    console.log(z);
    
}

//ARRAY
let fruit =["Aaple", "Banana","Orange", "Coconut"];
fruit.push("coconut");
fruit.pop("cocnut");
fruit.unshift("mango");
fruit.shift();
console.log(fruit);
let numofFruits = fruit.length;
console.log(numofFruits);
let index = fruit.indexOf("mango");
console.log(index);
for( i = 0; i< fruit.length; i++){
    console.log(fruit[i]);   
}
fruit.sort().reverse();
console.log(fruit);

//spread operator
let number = [1,2,3,4,5];
let maximum = Math.max(...number);
let minimum = Math.min(...number);
console.log(minimum);
console.log(maximum);
let username = "Aanal Mehta";
let letters = [...username].join("-");
console.log(letters);
let vegetables = ["carrots","ladiesfinguer"];
let foods = [...fruit,...vegetables, "milk"];
console.log(foods);

//rest
function openFridge(...fooods){
console.log(fooods);
}
const food1="pizza";
const food2="pizzas";
const food3="pizzass";
const food4="pizzasss";
const food5="pizzassss";
openFridge(food1,food2,food3,food4,food5);
function sum(...numbers){
    let result = 0;
      for(let numberss of numbers){
        result += numberss;
      }
      return result;
}
const total = sum(1,2);
console.log(`Your toatal is ${total}`);

function average(...numbers){
    let result = 0;
      for(let numberss of numbers){
        result += numberss;
      }
      return result/numbers.length;
}
const avg = average(80,90,100);
console.log(avg);

function combineString(...strings){
return strings.join(" ");

}
const fullname = combineString("Miss","Aanal","Mehta");
console.log(fullname);
