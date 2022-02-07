/* 

A) We are going to practice how to create different data types in javascript and how to use them. There are 7 primitive types in JavaScript but 
we are going to focus only in the first five in the following list:

1. String type -- You can store any text as a string in a variable like this: const name = "Carlos";
2. Boolean type -- They are either `true` or `false`. They are used for anything that needs a yes/no answer or enabled/disabled feature. const enabled = true;
3. Number type  -- A number. Example: let kilometersRanToday = 300;
4. Null type  -- It's to initialize a variable to null. There are many use cases. For example: const isValid = null; if(isValid === null) console.log('Set this properly please');
5. Undefined type -- A variable can be created but with no value of any type assigned to it. Then, it gets undefined.

// The other two types are - But they are not important now.
6. BigInt type - For long numbers with decimals
7. Symbol type

B) Then, we are going to see three different javascript non-primitive types: Object, array and function

1. Object - an object is a standalone entity, with properties and type. They are property/value pairs surrounded by { } braquests. The value of a property can be
be anything (string, boolean, number, null, undefined, another object, array or/and a function).

The syntax is:

const object = {
  parameter1: "value1",
  parameter2: "value2",
  
}

Note: The above object has two parameters with string values.
Note 2: In JSON format the parameter names are surrounded by "". See `package.json` file in this project as a example.

To access the paramater of an object we use the name of the object followed by a dot `.` and the parameter's name. Example:

// This is the object creating. An object car with two parameters (name with a string value, and year with a number value) 
const car = {
  name: 'Ford Focus',
  year: 2012
}

// And now I will access the two parameters:

car.name
car.year

// I could print them out like this:

console.log(car.name);
console.log(car.year);


*/

/* Exercise 1: Create and use objects.
     - Create an object that has 5 parameters (name the object and the parameters how you like but they have to be an entity for example a person or a car).
     - Each parameter has to be of a different type of the following primitive types: String, Boolean, Number, Null and Undefined.
     - Display in the console the object.
     - Add 5 if conditions, one per parameter:
        - If the parameter is Not Null, display the message `This value is valid`. Being `value` the parameter's value.
        - If the parameter is Null, display the message `This value is invalid`. Being `value` the parameter's value.
*/

const person = {
  name1: "Lélis Brighenti",
  age: 31,
  athlete: true,
  weight: null,
  hairColor: undefined,
};

if (person.name1 === "Lélis Brighenti") {
  console.log("Hello beautiful");
}
if (person.age === 31) {
  console.log("You are so young");
}
if (person.athlete === true) {
  console.log("You must workout hard");
}
if (person.weight === null) {
  console.log("Woman do not talk about weight");
}
if (person.hairColor === "black") {
  console.log("I like your hair color");
}
