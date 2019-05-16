// Arrays

// Arrays are an object. They are a container that can hold multiple datatypes.
// Has [] brackets
// Great for lists

let students = ['Eric', 'Michael', 15, 4, false, ['nic', 'Charles', 'Ethan']]

//console.log(typeof students)
console.log(students instanceof Array);
console.log(students[1])

let food = ['pie', 'shrimp', 'taco', 'cake', 'hotdog'];

food.push('Pizza')   // .push adds into the end of an existing array
food.splice(1, 1, 'Bananas')   // .splice can remove and insert items-- 3 arguments (index start, # of items removed, replacement if any)
//food.splice(2, 0, 'Sweet Potato Pie')
//food.pop(); //removes last item in the array
//food.shift(); //removes first item from array
//food.unshift(); // inserts elements at the start of the array

console.log(food)

for (f in food) {
    console.log(food[f]);
}
    console.log(f);
    

