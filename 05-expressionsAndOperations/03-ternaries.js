// TERNARIES

// Ternaries are a shorthand version of an 'if else if' statement

let x = 6

if (x > 0) {
    console.log('yes');  //traditional if else if
} else {
    console.log('no')
}
//ternaary
(x > 0) ? console.log('yes') : console.log('no');       //has to be a "if else", not "if"

// conditional statement
if (x == 0) {
    console.log('hello')
} else if (x < 0) {
    console.log('hi')
} else {
    console.log('goodbye')
}
//ternary operator version
let x = 6;
(x == 0) ? console.log('hello') : (x < 0) ? console.log('hi') : console.log('goodbye')

let age = 18;
(age >= 25) ? console.log('grandpa') : (age >= 21) ? console.log('boozer') : (age >= 18) ? console.log('do your duty') : console.log('sorry bud')

let yep = -8

(yep < 0 && yep > -10) ? console.log('worked') : (yep > 0) ? console.log('worked') : console.log('didn\t work');
