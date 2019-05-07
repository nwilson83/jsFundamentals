// IF

let isOn = true;

if (isOn == true) {
    console.log('The light is on!')
};
let isON = true
if (isON) {
    console.log('The light is on, yay!')
};

let isOff = false;

if(isOff == false) {
    console.log('The light is off!')
}

weather = 65;

if (weather < 70){
    console.log('wear a jacket')
};

// IF ELSE

weather = 75

if (weather < 70) {
    console.log('wear a jacket')
} else {
    console.log('no jacket necessary!')
};

// IF ELSE SYNTAX
//if (condition) {
//   logic
//   console.log (logic)
// } else {
//   console.log(error)
//}

let name = 'Nicholas';

if (name == 'Nicholas') {
    console.log('Hello, my name is Nicholas')
} else {
    console.log('Hello, what is your name?')
}

//Challenge. write code to capitialize the first letter of your name, and lowercase the rest of the lettes

let name = 'nIck';

if (name == name [0].toUpperCase()) {
    firstletter = name[0] + name.slice(1).toLower
    console.log(firstLetter)
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
}

// ELSE IF

/* if (condition) {
    logic a
}   else if (different condition) {
    logic b
}   else {
    logic c
}
*/

let age = 17

if (age >= 25) {
    console.log('Yay! you can rent a car!')
} else if (age >= 21) {
    console.log('Yay! You can drink!')
} else if (age >= 18) {
    console.log('Yay! You can vote!')
} else {
    console.log('Sorry, you cannot do anything fun');
}
