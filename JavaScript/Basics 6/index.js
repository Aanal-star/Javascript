//static
class MathUtil {
    static PI = 3.14;
    static getdiameter(radius) {
        return radius * 2;
    }
    static getcircumference(radius) {
        return 2 * this.PI * radius
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getdiameter(10));
console.log(MathUtil.getcircumference(10));

class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
    static getUserCount() {
        console.log(`This are ${User.userCount} users online`);
    }
    sayhello() {
        console.log(`Hello , my username is ${this.username}`);
    }
}
const user1 = new User("Aanal");
const user2 = new User("Dhairya");
user1.sayhello()
User.getUserCount();


//inheritance
class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} issleeping`);
    }
}
class Rabbit extends Animal {
    name = "rabbit";
    run() {
        console.log(`This ${this.name} is running`);
    }
}
class Hawk extends Animal {
    name = "hawk";
}
const rabbit = new Rabbit;
const hawk = new Hawk
console.log(rabbit.alive);
rabbit.eat()
rabbit.sleep();
rabbit.run();


//super
class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`This ${this.name} moves at spped of ${speed} mph`);
    }
}
class Rabbits extends Animals {
    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed
    }
    run() {
        console.log(`This ${this.name} can run `);
        super.move(this.runspeed);
    }
}
class Fishs extends Animals {

    constructor(name, age, swimspeed) {
        super(name, age);
        this.swimspeed = swimspeed
    }
}
const rabbits = new Rabbits("RABIT", 1, 25);
const fishs = new Fishs("FISH", 2, 30);
console.log(rabbits.name);
console.log(rabbits.age);
console.log(rabbits.runspeed);
rabbits.run()


//getter setter validate
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height;
    }
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Must be positive")
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Must be positive")
        }
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get area() {
        return this._width * this._height;
    }
}
const recangle = new Rectangle(20, 40);
console.log(recangle.width);
console.log(recangle.height);
console.log(recangle.area);


//destructuring
//swap number
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a)
console.log(b);

//swap element in array
const colore = ["red", "green", "blue", "black", "white"];
[colore[0], colore[3]] = [colore[3], colore[0]];
console.log(colore);

//assign array elements to variables
const [firstcolore, secondcolore, thirdcolore, ...extracolore] = colore
console.log(firstcolore);
console.log(secondcolore);
console.log(thirdcolore);
console.log(extracolore);

//extract value from object
const person1 = {
    firstname: "Aanal",
    lastname: "mehta",
    age: 20,
}
const person2 = {
    firstname: "Dhairya",
    lastname: "mehta",
    age: 18,
}
const { firstname, lastname, age } = person1;
console.log(firstname);
console.log(lastname);
console.log(age);

//in function parameters
function displayPerson({ firstname, lastname, age }) {
    console.log(`Name: ${firstname} ${lastname}`);
    console.log(`Age : ${age}`);
}
displayPerson(person1);
displayPerson(person2);


//nested objects
const person = {
    fullname: "Aanal Nileshbhai Mehta",
    age: 20,
    isStudent: true,
    hibbies: ["dancing", "cycling"],
    address: {
        street: "7",
        city: "Rajkot",
        country: "India"
    }
}
console.log(person.fullname);
console.log(person.address);
console.log(person.hibbies[1]);

for (const property in person.address) {
    console.log(person.address[property]);

}
//-------
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
class Tesstperson1 {
    constructor(name, age, addressData) {
        this.name = name;
        this.age = age;
        this.address = new Address(...addressData)
    }
}
const testperson1 = new Tesstperson1("Aanal", 20, ["7 navin", "rajkot", "india"]);
console.log(testperson1.address);


//Array Objects
const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 45 },
{ name: "banana", color: "yellow", calories: 105 },
{ name: "pineapple", color: "yellow", calories: 37 }
]
console.log(fruits[0].name)
fruits.push({ name: "grapes", color: "green", calories: 62 });
console.log(fruits);
//foreach
fruits.forEach(fruits => console.log(fruits.name)
)
//map
const fruitNames = fruits.map(fruits => fruits.color);
console.log(fruitNames);
//filter
const yellowFruits = fruits.filter(fruits => fruits.color === "yellow");
console.log(yellowFruits);
//reduce
const maxFruit = fruits.reduce((max, element) => element.calories > max.calories ? element : max);
console.log(maxFruit);


//sort
const fruit = ["apple", "orange", "banana", "pineapple", "cocnut"];
fruit.sort();
console.log(fruit);
const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => a - b)
console.log(numbers);


//shuffle bla bla bla
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);

console.log(cards);
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]
    }
}


//Data objects
const date = new Date(2025, 11, 1, 0, 0, 0, 0);
const date1 = new Date(0);
const date2 = new Date("2025-01-02T12:00:00Z");
const date3 = new Date();
console.log(date);
console.log(date1);
console.log(date2);
console.log(date3);
const year = date3.getFullYear();
const month = date3.getMonth();
const day = date3.getDate();
const hour = date3.getHours();
const minutes = date3.getMinutes();
const seconds = date3.getSeconds();
const dayOfWeek = date3.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

const cdate1 = new Date("2025-12-28")
const cdate2 = new Date("2026-1-1");
if (date2 > date1) {
    console.log("Happy New Year");

}


//closure
function outer() {
    let message = "Hello";
    function inner() {
        console.log(message);
    }
    inner();
}
//aama inner function ne access hoi jetlu outer function ni andar hoi 
function CreateCounter() {
    let count = 0;
    function toincrement() {
        count++;
        console.log(`Count increase to ${count}`);
    }
    function getCount() {
        return count
    }
    return { toincrement, getCount };
}
const counters = CreateCounter();
counters.toincrement();
counters.toincrement();
counters.toincrement();
console.log(`The current count is ${counters.getCount()}`);

function createGame() {
    let score = 0;
    function increaseScore(points) {
        score += points;
        console.log(`Our ${points}pts`);
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`Our ${points}pts`);
    }
    function getScore() {
        return score
    }
    return{increaseScore,decreaseScore,getScore};
}
const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`Final score is ${game.getScore()} pts`);


//setTimedOut()
// function sayhello(){
//     window.alert("Hello");
// }
//setTimeout(function(){window.alert("Hello")},3000);

let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => {
        window.alert("Hello");
    },3000);
    console.log("Started");
    
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
    
}