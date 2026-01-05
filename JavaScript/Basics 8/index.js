//add and change html
//example 1
//s-1 create element
const newh1 = document.createElement("h1");

//s-2 add attributes
newh1.textContent = "I like Pizza";
newh1.id = "myH1";
newh1.style.color = "tomato";
newh1.style.textAlign = "center"

//s-3 append elements
// document.body.apppend(newh1)
// document.body.prepend(newh1)
document.getElementById("box-1").append(newh1);
// document.getElementById("box-1").prepend(newh1);
// const box2 = document.getElementById("box-2");
// document.body.insertBefore(newh1,box2);

//now if we remove id like box-1,box-2,box-3,box-4 then
// const box = document.querySelectorAll(".box")
// document.body.insertBefore(newh1,box[1]);

//remove html element
document.getElementById("box-1").removeChild(newh1);

//example-2
const newlistitem = document.createElement("li");
newlistitem.textContent = "coconut";
document.id = "coconut";
// document.body.apppend(newlistitem)
// document.body.prepend(newlistitem);
// document.getElementById("fruits").append(newlistitem);
// document.getElementById("fruits").prepend(newlistitem);
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newlistitem, orange)
newlistitem.style.fontWeight = "bold";
newlistitem.style.backgroundColor = "lightgreen";

//if id are not there thenn
// const listitems = document.getElementById("fruits li")
// document.getElementById("fruits").insertBefore(newlistitem,listitems[0])








//eventlistener
//listen for specific events to create interactive web pages 
//events:click,mouseover,mouseout
//.addEventListener(event,callback/arrow function);

const myBox = document.getElementById("myBox");
// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Clicked 🥳";
// });
// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 🫨";
// })
// myBox.addEventListener("mouseout", event =>{
//     event.target.style.backgroundColor ="lightgreen";
// event.target.textContent = "Click me ";
// })

const myButton = document.getElementById("myButton");
// myButton.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Clicked 🥳";
// });
// myButton.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 🫨";
// })
// myButton.addEventListener("mouseout", event =>{
//     event.target.style.backgroundColor ="lightgreen";
// event.target.textContent = "Click me ";
// })
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Clicked 🥳";
});
myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 🫨";
})
myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me ";
})







//eventlistener
//listen for specific events to create interactive web pages
//events:keydown,keyup
//document.getElementById(event,callback);

const myBoxx = document.getElementById("myBoxx");
document.addEventListener("keydown", event => {
    //console.log(`Keydown =  ${event.key}`);
    //myBoxx.textContent="🤯";
    //myBoxx.style.backgroundColor="red"
});
document.addEventListener("keyup", event => {
    //console.log(`Keyup =  ${event.key}`);
    //myBoxx.textContent="😎";
    //myBoxx.style.backgroundColor="lightblue"
});
const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {
    //console.log(`Keydown =  ${event.key}`);
    myBoxx.textContent = "🤯";
    myBoxx.style.backgroundColor = "red"
});
document.addEventListener("keyup", event => {
    //console.log(`Keyup =  ${event.key}`);
    myBoxx.textContent = "😎";
    myBoxx.style.backgroundColor = "lightblue"
});
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "Arrowup":
                y -= moveAmount;
                break;
            case "Arrowdown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBoxx.style.top = `${y}px`
        myBoxx.style.left = `${x}px`
    }
    console.log(event.key);

})









// hide/show html
const hide = document.getElementById("hide");
const myImg = document.getElementById("myImg");
hide.addEventListener("click", event => {
    if (myImg.style.display === "none") {
        myImg.style.display = " block"
        hide.textContent = "hide"
    }
    else {
        myImg.style.display = "none";
        hide.textContent = "show";
    }
})
//have jya display che tya visibility and === none che tya === hidden, block tya visible and else ma none che tya hidden kari to img mate space already occupy thai jai.








//nodelist
//static collection of html elements by(id,class,element)
//can be created by using queryselectororall()
//similar to an array,but no(map,filter,reduce)
//it won't update to automatically reflect changes

let buttons = document.querySelectorAll(".mybuttonss");
console.log(buttons);
//add html/css
buttons.forEach(button => {
    button.style.backgroundColor="green";
    button.textContent+="😅"
})
//click event listener
buttons.forEach(button => {
    button.addEventListener("click",event =>{
        event.target.style.backgroundColor="tomato"
    })
})
//mouseover + mouseout event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor="rgba(77, 77, 251, 0.918"
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor="rgba(77, 77, 251, 0.99"
    })
})
//add element to nodelist
let newbutton = document.createElement("button");
newbutton.textContent="Button-5";
newbutton.classList = "mybuttonss";
const parentDiv = document.querySelector(".parent");
parentDiv.appendChild(newbutton);
console.log(buttons);
//modelist ma button-5 nai aave 
buttons = document.querySelectorAll("button");
console.log(buttons);

//remove element 
buttons.forEach(button =>{
    button.addEventListener("click",event =>{
        event.target.remove();
       // console.log(buttons);
        buttons = document.querySelectorAll(".mybuttonss");
                console.log(buttons);

    });
})













//classlist
//element property in js used to intereact with element list of classes(css)
//allows you to make reusble classes for any elements across web pages


// const boot = document.getElementById("boot");
// boot.classList.add("enable");
// boot.classList.remove("enable");
// boot.addEventListener("mouseover", event => {
//     event.target.add("hover");
// })
// boot.addEventListener("mouseout", event => {
//     event.target.remove("hover");
// })