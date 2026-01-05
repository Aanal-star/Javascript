//checkbox
const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");
mysubmit.onclick = function () {
    if (mycheckbox.checked) {
        subresult.textContent = "you are subscribe"
    }
    else {
        subresult.textContent = "not suscribe";
    }
    if (visaBtn.checked) {
        paymentresult.textContent = "you are paying with visa"
    }
    else if (mastercard.checked) {
        paymentresult.textContent = "you are paying with mastercard"
    }
    else if (paypal.checked) {
        paymentresult.textContent = "you are paying with paypal"
    }
    else {
        paymentresult.textContent = "you must select payment type"
    }
}

//ternary operators
let age = 21;
let message = age >= 18 ? "you are adult" : "you are a minor";
console.log(message);
let time = 16;
let greeting = time > 12 ? "good morning" : "good afternoon";
console.log(greeting);
let isstudent = true
let msg = isstudent ? "you are student" : "you are not student";
console.log(msg);
let purchaseamount = 2000;
let discount = purchaseamount >= 1000 ? 10 : 0;
console.log(`your total is ${purchaseamount - purchaseamount * (discount / 100)}`);

//switch
let day = 1;
switch (day) {
    case 1:
        console.log("It's monday");
        break;
    case 2:
        console.log("It's tuesday");
        break;
    case 3:
        console.log("It's wednesday");
        break;
    case 4:
        console.log("It's thrusday");
        break;
    case 5:
        console.log("It's friday");
        break;
    case 6:
        console.log("It's saturday");
        break;
    case 7:
        console.log("It's sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}
let score = 90;
let grade;
switch(true){
    case score >= 90:
        grade = "A";
        break;
    case score > 60:
        grade = "B";
        break;
    case score > 40:
        grade = "C";
        break; 
    default:
        grade = "F"; 
}
console.log(grade);


//string
let username = "Aanal Mehta";
console.log(username.charAt(0));
console.log(username.indexOf("l"));
console.log(username.lastIndexOf("a"));
console.log(username.length);
username= username.trim();
console.log(username);
username= username.toUpperCase();
console.log(username);
username= username.toLowerCase();
console.log(username);
username= username.repeat(5);
console.log(username);
let result = username.startsWith("A");
console.log(result);
let results = username.startsWith("a");
console.log(results);
let resultss = username.includes("a");
console.log(resultss);
let resultsss = username.replaceAll("a", "A");
console.log(resultsss);
let resultssss = username.padStart(200 , "n");
console.log(resultssss);


//string slicing
const fullname = "Aanal Mehta";
let firstname = fullname.slice(0,5);
let lastname = fullname.slice(6,  11);
let firstChar = fullname.slice(0,1);
let lastChar = fullname.slice(-1);
let firstchar2 = fullname.slice( 0, fullname.indexOf(" "));
console.log(firstname);
console.log(lastname);
console.log(firstChar);
console.log(lastChar);
console.log(firstchar2);

//method chaining
let name = window.prompt("Enter name");
// name = name.trim();
// let letter = name.charAt(0);
// letter= letter.toUpperCase();
// let extrahars = name.slice(1);
// extrahars = extrahars.toLowerCase();
// name = letter + extrahars;
// console.log(name);
name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
console.log(name);

//logical operator
const temp = 20;
if(temp > 0 && temp <= 30){
    console.log("weather is good");
}
else{
    console.log("weather is not good");
}
const isSunnny = true;
if(!isSunnny){
    console.log("It's cloudy");
}
else{
    console.log("It's is sunny");
}

//strict enquality
// == assign
// == compares
// === strict eyality(value and data types)
// != inequality
// !== strict inequality
// 3.14 -> number , "3.14 -> string"
const PI = 3.14;
if (PI == 3.14){
    console.log("That is pi"); 
}
else{
    console.log("Not pi ");
}

//while loop
let anyname;
while (anyname === ""){
  anyname = window.prompt(`Enter nameeeeeeee `)
}
console.log(`Hello ${anyname}`);
