// 1. We learned about the cohesion of HTML, CSS and JS in the room methaphore. HTML is all the elements in a room. CSS is how those elemens look like and are
// positioned and JS is the actions/functionality to modify or do things with the html elements, e.g. turn on the lamp (lapm is an html element)
// 2. We installed prettier to format the code on save
// 3. We learned the difference between `var`, `let` and `const`
// var is available globally and can be redifined
// let is available within the block where is defined and can also be redifined
// const is available within the block and can't be redefined

// 4. We learn to create objects, arrays, and use the array function call map in the following exercise:

// Create a collection(an array) of 2 objects. Each object will have 2 props: Destiny and price

let object = { destiny: "Madrid", price: "50 Euros" };
let object2 = { destiny: "Barcelona", price: "100 Euros" };

let places = [object, object2];

// Loop inside the array and print the object per item in the array (using the array.map JS function)

function printObject(objectInput) {
  console.log(objectInput);
}

printObject(object);

printObject(object2);

// Advanced feature
places.map(printObject); // the array.map JS function receives as an input (aka argument) a function that is going to be called for each item.
// Note.aka is also known as
