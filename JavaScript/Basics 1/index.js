// chapter 1
// console.log(`Hello`);
// window.alert(`This is alert`);
// document.getElementById("myH1").textContent="Hello";
// document.getElementById('myP').textContent="Aanal";

//chapter 2
//variable (assignment,declaration)
// // let x;
// // x=1;
// // let y= 50;
// // console.log(x);
// // console.log(`You are ${y}`);
// // let price =25.30;
// // console.log(typeof price);
// // let firstName ='Aanal';
// // let email = 'abc123@gmail.com'
// // console.log(typeof firstName);
// // console.log(`My name is ${firstName}`);
// // console.log(`My name is ${email}`);
// // let online = `true`;
// // console.log(`Aanal is online: ${online}`);
// // console.log(typeof online);
// let fullname = "Aanal";
// let age = 20;
// let student = true;
// document.getElementById("p1").textContent = `My name is ${fullname}`;
// document.getElementById("p2").textContent = `My age is ${age}`;
// document.getElementById("p3").textContent = `Enrolled ${student}`;

// //chapter 3
// let students = 30;
// // student = students + 1;
// // student = students - 1;
// // students = students * 2;
// // students = students/2;
// // let extrastudent = students % 3;
// // students +=1;
// // students -=1;
// // students ++;
// // console.log(students);
// // console.log(extrastudent);
// let result = 1 + 2 * 3 + 4 ** 2;
// console.log(result);
// //paranthesis,exponential, multiplocation(division)(modulo), addi(sub)

// //chapter 4
// //use input
// // let username;
// // username = window.prompt("Enter your name");
// // console.log(username); 
// let username;
// document.getElementById("mysubmit").onclick = function(){
// username = document.getElementById("myText").value;
// document.getElementById("myh1").textContent = `Hello ${username}`
// console.log(username);
// }

// //Math 
// console.log(Math.PI);
// console.log(Math.E);
// let x = 3.56;
// let y = 2;
// let z;
// z = Math.round(x);
// z = Math.ceil(x);
// z = Math.floor(x);
// z = Math.trunc(x);
// z = Math.pow(x , y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x , y);
// let min = Math.min(x , y);
// console.log(max);
// console.log(min);
// console.log(z);

//chapter 5(type conversion)
// let age = window.prompt("How old are you");
// age = Number(age);
// age +=1;
// console.log(age, typeof age);
let x="pizza";
let y="pizza";
let z="pizza";
x=Number(x);
y=Boolean(y);
z=String(z);
console.log(x,typeof x);
console.log(y, typeof y);
console.log(z, typeof z);