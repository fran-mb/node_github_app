// RECIPES APP

/* 
    - The goal of this exercise is to implement a set of functions to support the following application. 
    - Implement the functions used in the application so that they meet the expected result.
    - Create a feature branch a PR with your changes.
    - Use JS ES6 features as (arrow functions, spread operator, map, forEach and find)
    - See here the 10 most useful ES6 features: https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb
    - Note: Array objects have a javascript paramater by default that tells you the number of items. Example. const numberArray = [1,2,3]; if you do numberArray.length you get a number 3 of items.
*/

// Functions - what needs to be implemented

const sayWelcome = () => {
  console.log("Welcome to my restaurant");
};

const showRecipesNumber = (recipes) => {
  console.log(`There are ${recipes.length} recipes`);
};

const showAllRecipesNames = (recipes) => {
  recipes.forEach((element) => {
    console.log(element.name);
  });
};

// Data
const gazpacho = {
  name: "Gazpacho",
  recipe: [
    "tomato",
    "cucumber",
    "pepper",
    "water",
    "garlic",
    "olive oil",
    "vinegar",
    "bread",
  ],
  rating: 10,
};

const brigadeiro = {
  name: "Brigadeiro",
  recipe: [
    "tomato",
    "cucumber",
    "pepper",
    "water",
    "garlic",
    "olive oil",
    "vinegar",
  ],
  rating: 9,
};

const paella = {
  name: "Paella",
  recipe: ["rice", "seafood", "tomato", "peeper", "garlic", "water", "potato"],
  rating: 8,
};

const tortilla = {
  name: "Tortilla",
  recipe: ["potatoes", "eggs", "olive oil", "onion"],
  rating: 7,
};

const torrijas = {
  name: "Torrijas",
  recipe: ["bread", "eggs", "milk", "honey"],
  rating: 6,
};

const recipes = [gazpacho, brigadeiro, paella, tortilla];

// Application
sayWelcome(); // Expected output: 'Welcome to my restaurant'
showRecipesNumber(recipes); // Expected output: 'There are 4 recipes'
showAllRecipesNames(recipes); // Expected output: 'Gazpacho, Brigadeiro, Paella, Tortilla'

/*
showHighestRatingRecipe(recipes); // Expected output: 'Gazpacho. Rating: 10'
showLowestRatingRecipe(recipes); // Expected output: 'Tortilla. Rating: 7'
addRecipe(recipes, torrijas); // Expected output: 'Recipe for Torrias has been added'
showRecipesNumber(recipes); // Expected output: 'There are 5 recipes'
showAllRecipesNames(recipes); // Expected output: 'Gazpacho, Brigadeiro, Paella, Tortilla, Torrijas'
findRecipe(recipes, "Tortilla"); // Expected output: 'Tortilla recipe: 'potatoes', 'eggs', 'olive oil', 'onion''
*/
