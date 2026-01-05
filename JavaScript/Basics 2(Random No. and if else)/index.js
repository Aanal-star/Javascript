// //let randomNum = Math.floor (Math.random() * 6 );
// // const min = 50;
// // const max = 100;
// // let randomNum = Math.floor(Math.random() * (max-min)) + min;
// // console.log(randomNum);
// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const min = 1;
// const max = 6;
// let randomNum;
// myButton.onclick = function(){
//     randomNum = Math.floor(Math.random() * max) + min;
//     myLabel.textContent = randomNum;
// }


//if statements 
// let age = 25;
// if(age >= 18){
// console.log("You are old enough to enter this site.");
// }
// else {
//     console.log("You must be 18+");   
// }

// let time = 9;
// if (time < 12){
// console.log("Good morning");
// }
// else{
//     console.log("Good afternoon");
// }

// let isstudent = true;
// if (isstudent){
//     console.log("you are student");
// } 
// else{
//     console.log("you are not student");
// }

// let old = 25;
// let haslicense = true;
// if(old>=16){
//     console.log("you are old enough to drive");
//     if(haslicense){
//         console.log("You have your license");
//     }
//     else{
//         console.log("You do not have license");
//     }
// }
// else{
//     console.log("you must be 16+");  
// }

const mytext= document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");
let age;

mysubmit.onclick= function(){
age = mytext.value;
age = Number(age)
if (age >=18){
    console.log("your age is enough to view this site."); 
    result.textContent = "your age is  enough to view this site."
}
else if (age < 0){
    console.log("you can'nt be 0");
    result.textContent = "you can'nt be 0"
} 
else if (age == 0){
    console.log("you are just born");
    result.textContent = "you are just born";
}
else if (age > 100){
    console.log("you are too age");
    result.textContent = "you are too age";
}
else{
    console.log("you must be 18+");
    result.textContent = "you must be 18+"
}
}
