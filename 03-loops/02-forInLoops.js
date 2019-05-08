//FOR IN LOOPS

// Great for iterating over values in an object
// The for in statement iterates a specified variable over all the enumerable properties of an object.

let student = { name: 'Peter', awesome: true, degree: 'JavaScript', week:1};
for (item in student) {
    console.log('item =>', item);
    console.log('student[item] =>', student[item])
}

let dogarray = ['collie', 'pitbull', 'poodle', 'mutt', 'retriver'];
for (dog in dogarray) {
    console.log(dog)
}

let name = 'nick';
let capName;

for (let n in name){
    if (n == 0) {
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].toLowerCase();
    }
}
console.log(capName);