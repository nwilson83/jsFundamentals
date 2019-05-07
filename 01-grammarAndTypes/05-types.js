// Types
// Boolean

let on = true;
console.log(on);

let off = false;
console.log(off);

// Null
// Null = empty value (not 0, not undefined)

let empty = null
console.log(empty);

// Undefined
// Not an error. No value has been assigned

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

// Numbers
let degrees = 90;
console.log(degrees)

let precise =999999999999999;
console.log(precise)

let rounded = 9999999999999999;
console.log(rounded)

let notQuite = 0.2 + 0.1;
console.log(notQuite)

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// Strings
//Strings are any value within quotes""

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo)

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third)



//Challenge

let firstname = 'Nick'
let lastname = 'Wilson'
let housenumber = '4749'
let street = "Commodores Ln"
let city = "Lafayette"
let state = 'IN'
let zipcode = '47909'
console.log(firstname, lastname + ',', housenumber, street + ',', city + ',', state, zipcode)

// Objects
// A collection of key-value pairings.
// Hold multiple data types

// Denotes by { }
// Has keys and values (color (key): 'blue' (value)), separated with a colon
// Each key is seperated with a comma

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};

console.log(burritosNow)

//Arrays

//Arrays are great for lists
//Denotes by []
//Has values ('blue', 'green', 'yellow'), separated by commas

let burritos = ['large', 4, true];
console.log(burritos)

console.log(typeof burritos)