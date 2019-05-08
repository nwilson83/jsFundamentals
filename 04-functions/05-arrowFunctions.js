// Arrow Functions

// Normal
function coffee() {
    console.log('coffee is good');
}

// Fat Arrow.
let coffee = () => {
    console.log('fat arrow coffee')
}
coffee();

//Concise Body
//Concise bodies do not need parentheses, unless there is more than one parameter
//return is implied
//line breaks are bad
let apples = x => console.log(`There are ${x} apples`);
apples (10)

let apples = (x , y) => console.log(`there are ${x} apples and ${y} pears.`);
apples (10,5)

// Block body
let apples = (x) => { console.log(`There are ${x} apples.`)}
apples(10)