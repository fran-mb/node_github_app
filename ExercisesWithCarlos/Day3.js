// We are going to create an app that will printout a predefined selection of food menu.
// There will be 3 options for breakfast, 3 options for lunch and 3 options for dinner
// 1. Use variables and/or arrays to define the meal types
// 2. Use a function called printMenu to define the printing. This function will receive a parameter per meal.
// 3. Advanced. Use a callback() function to say "Enjoy your meal" once the menu has been printed in printMeal.

const breakfast = ["Scramble eggs", "Pancakes", "Porridge"];
const lunch = ["Carbonara", "Beef stew", "Feijoada"];
const dinner = ["Risotto", "Beef Burguer", "Pad Thai"];

function printMenuSelection(
  breakfastOption,
  lunchOption,
  dinnerOption,
  callback
) {
  console.log(breakfastOption);
  console.log(lunchOption);
  console.log(dinnerOption);
  callback();
}

function enjoyYourMeal() {
  console.log("Enjoy your meal");
}

printMenuSelection(breakfast[1], lunch[2], dinner[2], enjoyYourMeal);

// What I have used/learned here:

// 1. How to create/define arrays
// 2. How to create/define a function that has 3 parameters/arguments/inputs and print them out (independently of what they are)
// 3. How to call/execute the defined function passing 3 parameters (in this case, our breakfast, lunch and dinner options)
// 4. A callback function is a function passed as a parameter/arg/input to another function. That will execute inside eventually.
