// SWITCH

let friend= 'Nick'

switch (friend) {
    case "Tom":
    console.log('Hey Tom, When are you going rock climbing?');
    break;
    case "Kenn":
    console.log('Hey Ken, wanna play catan?');
    break;
    case "Carolyn":
    console.log('Hey Carolyn, when are you playing DND?');
    break;
    default:
     console.log(`I'm sorry, ${friend}, but do I know you?`);
}

//String interpolation allows us to create a placeholder for the value of a variable that we choose to assign

let dessert = "creme brulee"

switch (dessert) {
    case "pie":
    console.log('Pie, pie, me oh my!');
    break;
    case "cake":
    console.log('Cake is great!');
    break;
    case "ice cream":
    console.log('I scream for ice cream!');
    break;
    default:
    console.log(`${dessert} is not on the menu butt-face!`)
    
    
}

let yep = '';

switch (true) {
    case (yep < 0 && yep > -10):
    console.log('worked!');
    break;
    default:
    console.log('didn\'t work');
}