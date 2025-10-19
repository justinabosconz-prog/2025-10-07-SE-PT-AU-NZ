//Write a specification comment for each function//

//This function subtracts second number from first number//
function Subtract(a, b) {
  return a - b;
}
//This function adds second number to first number//
function Add(a, b) {
  return a + b;
}
//This function divides second number from first number//
function Divide(a, b) {
  return a / b;
}
//This function multiplies second number with first number//
function Multiply(a, b) {
  return a * b;
}

//Write at least 3 unit tests for each function//
//In the unit tests, try to include both expected and non-typical test values//

//unit test for Subtract()//

if (Subtract(6, 3) != 3) {
  throw new Error("Test failed");
}
if (Subtract(6, -3) != 9) {
  throw new Error("Test failed");
}

//unit test for Add()//

if (Add(6, 3) != 9) {
  throw new Error("Test failed");
}
if (Add(6, -3) != 3) {
  throw new Error("Test failed");
}

//unit test for Divide()//

if (Divide(6, 3) != 2) {
  throw new Error("Test failed");
}
if (Divide(6, -3) != -2) {
  throw new Error("Test failed");
}

//unit test for Multiply()//

if (Multiply(6, 3) != 18) {
  throw new Error("Test failed");
}
if (Multiply(6, -3) != -18) {
  throw new Error("Test failed");
}

console.log("All tests passed");
