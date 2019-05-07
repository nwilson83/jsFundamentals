// Variables
// Varaiables are containers for storing data values (words, sentences, numbers, objects, etc);

var a = 1;
var b = 2;
console.log(a + b);

/* Notes:

1. a variable must begin with a latter, underscore, or a dollar sign
2. numbers may follow the aboce charcters, but cannot come first
3. Javascript is case sensitive -- 'hello' and 'Hello' are different variables
4. variables must be identified with unique names

*/

var x;
console.log('Declaration:', x)

x = 10
console.log('Initialization 1:', x)

x = 33
console.log('Initialization 1:', x)

var y = 'hello';
console.log('Both:', x, y)

// Var, Let, and Const;

// Var = 'old' keyword;
// Let = 'new' keyword;
// Const = also 'new' keyword; declares unchangable variables

var today = 'great!';
const elevenfifty = 'wonderful';
console.log(today, elevenfifty);

today = 'lovely!';
console.log(today, elevenfifty)

elevenfifty = 'Super';
console.log(today, elevenfifty);