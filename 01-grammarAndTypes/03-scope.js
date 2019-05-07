// Scoope
// JavaScript had function scope
// Scope determines the accessability of these variables
// Variables defined inside a function are NOT accessible from outside the function

// Local and Global Scope

let x = 12

function scope() {
    let x = 33
    console.log(x);
}
scope();
console.log(x);

let x = 12

function coffee() {
    x = 33
    console.log(x);
}
coffee();
console.log(x);

// var VS let

var x = 12

function scope() {
    var x = 33
    if (true){
        var x = 45;
        console.log(x);
    }
    console.log(x)
}
scope()
console.log(x);


//var
var x = 12

//let

function scope() {
    var x = 33
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x)
}
scope()
console.log(x);

//const

function scope() {
    const x = 33
    if (true){
        const x = 45;
        console.log(x); //45
    }
    console.log(x) //33
}

scope()
