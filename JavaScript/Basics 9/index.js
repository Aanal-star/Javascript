//promises
//an object that manages asynchronous operations.
//wrap promises object around {asynchronous code}
//"i promise to return value"
//pending => resolved or rejected
//new promises((resolve,reject) =>{asynchoronous code})

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalk = true;
            if (dogWalk) {
                resolve("You walked the dog");
            }
            else {
                reject("You didn't walked dog")
            }
        }, 1500);
    })
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenclean = false;
            if (kitchenclean) {
                resolve("You cleaned kitchen");
            }
            else {
                reject("You didn't clean kitchen")
            }
        }, 2500);
    })
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        const trashOut = true;
        setTimeout(() => {
            if (trashOut) {
                resolve("you taked out trash ");
            }
            else {
                reject("You didn't take out trash");
            }
        }, 500)
    })
}
walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("Completed"); })
    .catch(error => console.error(error))








//Async/await
//Async = makes a function return promise
//Await = makes an async function wait for promise

//Allows you write asynchronous code in synchoronous manner
//async don't have any resolve or reject parameters
//everyrthing after await is placed in an event queue

async function dochores(params) {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOuttrashResult = await takeOutTrash();
        console.log(takeOuttrashResult);
        console.log("Completedddddd");
    }
    catch (error) {
        console.log(error);
    }
}
dochores();







//json
//js object notation)data-interacting format
//used for exchanging data between server and a web application
//json files{key:value} or [value1,value2,value3]
//json.stringify()= converts a js object to a json string
//json.parse()=converts json string to js object

const names = ["Aanal", "Dhairya", "Bhumika", "Nilesh"];
const jsonString = JSON.stringify(names);
console.log(names);
const person = {
    "name": "Aanal",
    "age": "20",
    "isEmployeed": false,
    "hobbies": ["dancing", "reading"]
}
const jsonStrings = JSON.stringify(person);
console.log(jsonStrings);
const people = [
    {
        "name": "Aanal",
        "age": "20",
        "isEmployeed": false
    },
    {
        "name": "Dhairya",
        "age": "18",
        "isEmployeed": false
    },
    {
        "name": "Bhumika",
        "age": "45",
        "isEmployeed": true
    },
    {
        "name": "Nilesh",
        "age": "50",
        "isEmployeed": true
    }
]
const jsonStringss = JSON.stringify(people);
console.log(people);
console.log(jsonStringss);

const jsonName = `["Aanal","Dhairya","Bhumika","Nilesh"]`;
const jsonperson = `{"name":"Aanal", "age":"20", "isEmployeed":false, "hobbies":["dancing","reading"]}`;
const jsonpeople = `[
    {"name": "Aanal","age": "20","isEmployeed": false},
    {"name": "Dhairya","age": "18","isEmployeed": false},
    {"name": "Bhumika","age": "45","isEmployeed": true},
    {"name": "Nilesh","age": "50","isEmployeed": true}]`

const parseData = JSON.parse(jsonName);
console.log(parseData);
//same for person and people

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));








//fetch
//function used for making http requests to fetch resources(json style data,imahe,files)
//Simplifies asynchronous data fetching in js and used for interacting with api to retrive and send data asynchronous over the web
//fetch(url,{options})


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch resources")
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.log(error))
fetchData()
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonname").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
throw new error("Could not fetch resources");
        }
        const data = await response.json();
     const pokemonsprite = data.sprites.front_default;
     const imgElement = document.getElementById("pokemonsprints");
     imgElement.src = pokemonsprite;
     imgElement.style.display ="block"
        
    }
    catch (error) {
        console.error(error);
    }
}