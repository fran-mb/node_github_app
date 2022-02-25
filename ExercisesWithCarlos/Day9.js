// We are going to create functions for a calculator.

// I will show the application. This application will use functions that haven't been created yet. You will need to create these functions.


// #### Function definitions #####

function showInputError(numberOfArgumentsNeeded) {
  console.log(`Error: You need to provide ${numberOfArgumentsNeeded} numbers this function.`)
};

// Define now function addition and others and make sure you use the above function showInputError to handle input errors.


// ##### Application executing #####
addition(1,3); // Expected Output: "1 + 3 = 4."
addition(1);  // Expected Output: "Error: You need to provide 2 numbers this function."
substraction(3,1); // Expected Output: "3 - 1 = 2."
substraction(3); // Expected Output: "Error: You need to provide 2 numbers this function."
multiplication(1,2); // Expected Output: "1 * 2 = 2."
multiplication(1); // Expected Output: "Error: You need to provide 2 numbers this function."
division(1,2); // Expected Output: "1 * 2 = 2."
division(1); // Expected Output: "Error: You need to provide 2 numbers this function."
