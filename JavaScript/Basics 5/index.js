//callback
hello(goodbye);
function hello(callback) {
    console.log("Hello");
    callback();
}
function goodbye() {
    console.log("GoodBye");
}

sum(displaypage, 4, 2)
function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayresult(result) {
    console.log(result);
}
function displaypage(result) {
    document.getElementById("myh1").textContent = result;
}


//for each
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(square)
numbers.forEach(triple)
numbers.forEach(double)
numbers.forEach(display)

function double(element, index, array) {
    array[index] = element * 2;
}

function triple(element, index, array) {
    array[index] = element * 3;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function display(element) {
    console.log(element);
}


//map
const number = [1, 2, 3, 4, 5];
const squares = number.map(square);
console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}
const students = ["a", "b", "c", "d"];
const studentupper = students.map(uppercase);
console.log(studentupper);

function uppercase(element) {
    return element.toUpperCase();
}

const dates = ["2024-1-10", "2025-1-9", "2026-1-1"];
const formatedDates = dates.map(formatedDated);
console.log(formatedDates);

function formatedDated(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


//filter
let numb = [1, 2, 3, 4, 5];
let evenNums = numb.filter(isEven);
console.log(evenNums);

function isEven(element) {
    return element % 2 === 0;
}

const ags = [16, 17, 3, 20];
const adults = ags.filter(adult);
console.log(adults);
function adult(element) {
    return element >= 18;
}

//reduce
const prices = [5, 10, 15, 55, 100, 200];
const total = prices.reduce(sum);
console.log(total.toFixed(2));

function sum(accumulator, element) {
    return accumulator + element;
}

// function declaration
function hello() {
    console.log("Hello");
}
//function expression 
setTimeout(hello, 3000);

setTimeout(function () {
    console.log("Hellllo");
}, 3000);

const funcnumbers = [1, 2, 3, 4, 5, 6];
const squs = funcnumbers.map(square);
console.log(squs);

function square(element) {
    return Math.pow(element, 2);
}

const funcnumbers2 = [1, 2, 3, 4, 5];
const squaress = funcnumbers2.map(function (element) {
    return Math.pow(element, 2);
});
console.log(squaress);


//arrow function
function hello() {
    console.log("Hello aanal");
}
hello();

const hellos = function () {
    console.log("Hello Aanal");
}
hellos();

const helloa = (name, age) => {
    console.log(`Hello ${name}`)
    console.log(`You are ${age} years old`);
};
helloa("Aanal Mehta", 20);

setTimeout(() => console.log("Heeeeellllllllllo")
    , 3000);

const num = [1, 2, 3, 4, 5, 6];
const sq = num.map((element) => Math.pow(element, 2));
console.log(sq);

const evennumbers = num.filter((element) => element % 2 === 0);
console.log(evennumbers);


//object
const person1 = {
    firstname: "Aanal",
    lastname: "Mehta",
    age: 30,
    isEmployed: true,
    sayHello: function () {
        console.log("Hi I am Aanal");
    }
}
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
person1.sayHello();


//this
const person2 = {
    name: "Dhairya",
    favfood: "pizza",
    sayHello: function () { console.log(`Hi I am ${this.name}`); }
}
person2.sayHello();


//constructor
function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function () {
            console.log(`You drive this ${this.model}`);
        }
}
const car1 = new Car("Ford", "Mustang", "2024", "red");
const car2 = new Car("Mercedes", "Mustang", "2025", "black");
console.log(car1.make);
console.log(car1.color);
console.log(car1.model);
console.log(car1.year);
car1.drive();


//class
function Product(name,price){
    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        console.log(`Product ${this.name}`);
        console.log(`Price ₹${this.price.toFixed(2)}`);
    }

    this.calculateTotal=function(salestax){
        const taxAmount = this.price * salestax;
        const total = this.price + taxAmount;
        return total;
    }
}
const salestax = 0.05;

const product1 = new Product("Laptop",60000);
const product2 = new Product("LaptopBag",2000);
product1.displayProduct();
const totall = product1.calculateTotal(salestax);
console.log(`Total price with tax is ₹${totall.toFixed(2)}`);
