// Returns

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName)
    return capName
}

const myName = capitalizeName('nockUlas')

console.log(myName + ', how does it feel to be such a dinkus?')

function tipCalc(bill) {
    let tip = (bill * 0.2);
    return tip.toFixed(2) //returns value to two desimals
}
let totalTip = tipCalc(19.88);
console.log(totalTip);



///////////////////////////
///////////////////////////
///////////////////////////
function isPalindrome(s,i) {
    return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
   }

   
   
   
   console.log(isPalindrome('test'));
   console.log(isPalindrome('racecar'));
   console.log(isPalindrome('nick'));


const str = "hello"

var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */ 
console.log('array1: ', array1);

let str1 = ['d','a','c'];
let rev = str1.reverse();

if (str1 === rev) {
    console.log(rev)
} else {
    console.log('This is not a palindrone')
}
let word ='dad'

if (word.split() === word.split().reverse()) {
    console.log(word)
} else {
    console.log('this is not a palindrome')
}



let word = 'favor';

var str = 'A \uD87E\uDC04 Z'; // We could also use a non-BMP character directly
for (var i = 0, chr; i < str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  }
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning a variable to represent the 
  // individual character

  console.log(chr);
}

function palindrome(str) {
    return true;
    console.log(str)
  }
  palindrome("eyp");
  
  
function checker(word) {
    let capName = '';
    for (let l in word) {
        if (l == 0) {
            capName += word[l].toUpperCase();
        } else {
            capName += word[l].toLowerCase();
        }
    }
    console.log(capName)
    return capName
}

const myName = checker('nockUlas')

console.log(myName + ', how does it feel to be such a dinkus?')



