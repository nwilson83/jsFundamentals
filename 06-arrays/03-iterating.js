// Iterating

// forEach() method that executes a function once for each array element

forEach('currentValue', 'the index', 'the entire array');

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.forEach(f => {console.log(f)})
//food.forEach( (f, number) => {console.log(number, f) } )
//food.forEach((f, number, array) => { console.log(f, number, array)})

let foodFunction = () => {
    for (f in food) {
        console.log(f)
        console.log(food[f])
        console.log(food)
    }
}
foodFunction();

let movies = ['Hamlet II', 'Step Up II', 'death race II', 'Home alone II'];

movies.splice(0, 1, "Ghostbusters II")
movies.push('Spaceballs II: The Search for More Money')
movies.forEach(m => {console.log(m)})

