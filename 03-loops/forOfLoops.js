// FOR OF LOOPS

// The for ... of statement creates a loop iterating over iterable objects, meaning it can numerically look over these items.

let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1};
for(item of student) {
    console.log(item);
}
//student is not iterable
let dogarray = ['collie', 'pitbull', 'poodle', 'mutt', 'retriver'];
for (dog of dogarray) {
    console.log(dog)    // you get numbers in an "in" loop and names for an "of" loop
}

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}