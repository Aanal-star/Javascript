function rollDice(){
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
const values = [];
const images = [];
for(let i =0; i<numofdice;i++){
    const value = Math.floor(Math.random() * 6) +1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png" alt="Dice${value}">`)
}
diceresult.textContent = `dice.${values.join(',')}`;
diceimages.innerHTML = images.join(' ');
}

//random password
function generatepassword(length, includelowercase, includeuppercase, includenumbers, passwordsymbols){
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbols = "!@#$%^&*";

    let allowedchars = "";
    let password = "";

    if(includelowercase){
        allowedchars += lowercasechars;
    }
    if(includeuppercase){
        allowedchars += uppercasechars;
    }
    if(includenumbers){
        allowedchars += numberchars;
    }
    if(passwordsymbols){
        allowedchars += symbols;
    }

    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }

    return password;
}
const passwordlength = 12;
const includelowercase = true;
const includeuppercase = true;
const passwordsymbols = true;
const includenumbers = true;

const password = generatepassword(
    passwordlength,
    includelowercase,
    includeuppercase,
    includenumbers,
    passwordsymbols // ✔ fixed argument order
);

console.log(`Generated password ${password}`);
