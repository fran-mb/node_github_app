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

1. OBJECTS - an object is a standalone entity, with properties and type. They are property/value pairs surrounded by { } braquests. The value of a property can be
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

1. FUNCTIONS - A function is a block of code designed to perform a particular task. This code is executed when "something" invokes it (calls it).

A function has: 
  - a name.  Note: it could not have a name and be an anonymous function. Example: function(){}
  - A input or several inputs normally called arguments or no input at all.
  - An output. This can be either a serie of instructions or a returned value. 
   
  Example 1. Function with no inputs (arguments) and as an output has a serie of instructions:
      function serieOfInstrunctions() { 
         console.log('Hello'); 
         console.info('Here you have your information');
      }

  Example 2. Function with an input (argument) and as an output returns a value:
      function giveMeName(person) {
        return person.name;
      }
      
  Example 3. A function that calles other functions:
      function main() {
        serieOfInstrunctions();

        const person = {name: 'Laura'};
        const name = giveMeName(person); // I'm storing the returned value in a variable called name.
        console.log('Name:', name);
      }
      
How to define a function:
  1. You can use the standard syntax: `function name(argument 1, argument 2, ...){ code }` or the arrow function sintax: const name = (argument 1) => { code }
  2. You need to know what the function is supposed to do. Then give it a name that represents that.
  3. You need to decide if the function will receive arguments as inputs to do its calculations/processing/figuring out...
  4. Inside the code block you do the processing/calculations/figuring out using the inputs of the functions or other data defined before the function.

How to use a function:
   1. To use a function you need to call it by adding () to the function name. Example: giveMeName()
   2. If the function is supposed to receive arguments as inputs you add them inside the (). Example: giveMeName(person)
   3. You can store the returned value of a function in a variable {const a = giveMeName(person); console.log(a)} or use it directly {console.log(giveMeName(person))}
      
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
  name: "Lélis Brighenti",
  age: 31,
  athlete: true,
  weight: null,
  hairColor: undefined,
};

if (person.name === "Lélis Brighenti") {
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

/* Exercise 2: Create and use functions.
     2.1 Create a function that just say "Welcome to functionLand"
     2.2.Create a function that receives the previously created `person` object and returns the name.
     2.3 Create a function that receives the person age and returns true if age is > 30. Otherwise it returns false.
     2.4 Create a function that recieves the `person` object and tells "Welcome to functionLand", then it shows the person name. 
         Note: You can't copy paste code previously used in other functions.
*/

