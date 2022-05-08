// We are going to create functions for a calculator.

// I will show the application. This application will use functions that haven't been created yet. You will need to create these functions.

// #### Function definitions #####

/*

function showInputError(numberOfArgumentsNeeded) {
  console.log(
    `Error: You need to provide ${numberOfArgumentsNeeded} numbers this function.`
  );
}

// Define now function addition and others and make sure you use the above function showInputError to handle input errors.

// ##### Application executing #####
addition(1, 3); // Expected Output: "1 + 3 = 4."
addition(1); // Expected Output: "Error: You need to provide 2 numbers this function."
substraction(3, 1); // Expected Output: "3 - 1 = 2."
substraction(3); // Expected Output: "Error: You need to provide 2 numbers this function."
multiplication(1, 2); // Expected Output: "1 * 2 = 2."
multiplication(1); // Expected Output: "Error: You need to provide 2 numbers this function."
division(1, 2); // Expected Output: "1 / 2 = 2."
division(1); // Expected Output: "Error: You need to provide 2 numbers this function."

*/

function showInputError(numberOfArgumentsNeeded) {
  console.log(
    `Error: You need to provide ${numberOfArgumentsNeeded} numbers this function.`
  );
}

function addition(numb1, numb2) {
  // console.log(numb1 + numb2);
  if (numb1 && numb2) {
    console.log(`${numb1} + ${numb2} = ${numb1 + numb2} `);
  } else {
    showInputError(2);
    //addition !== NaN;
    //console.log(showInputError);
  }
}
addition(1);

function substraction(n1, n2) {
  if (n1 && n2) {
    console.log(`${n1} - ${n2} = ${n1 - n2}`);
  } else {
    showInputError(2);
  }
}
substraction(3, 1);

function multiplication(num1, num2) {
  if (num1 && num2) {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
  } else {
    showInputError(2);
  }
}
multiplication(1);

function division(number1, number2) {
  if (number1 && number2) {
    console.log(`${number1} / ${number2} = ${number1 / number2} `);
  } else {
    showInputError(2);
  }
}
division(2, 2);
