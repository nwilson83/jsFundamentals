// Arrays

// Arrays are an object. They are a container that can hold multiple datatypes.
// Has [] brackets
// Great for lists

let students = ['Eric', 'Michael', 15, 4, false, ['nic', 'Charles', 'Ethan']]

//console.log(typeof students)
//console.log(students instanceof Array);
console.log(students[1])

let food = ['pie', 'shrimp', 'taco', 'cake', 'hotdog'];

food.push('Pizza')   // .push adds into the end of an existing array
food.splice(1, 1, 'Bananas')   // .splice can remove and insert items
for (f in food) {
    console.log(food[f]);
}
    console.log(f);

