// Declared and created in memory
function addNumbers(number1, number2) {
  console.log("First argument: ", number1);
  console.log("Second argument: ", number2);
}

function perv(par1, par2) {
  console.log("Part1:", par1);
  console.log("Part2:", par2);
}

let valueNumber1 = 1;
let valueNumber2 = 2;

// Execution starts
// addNumbers();
// addNumbers(1);
// addNumbers(valueNumber1, valueNumber2);

perv("carlos", "daniel");
perv(1, 2);
perv(true, false);
perv({ param1: "value1" }, [1, 2, 3, 4]);
perv(addNumbers, perv);
