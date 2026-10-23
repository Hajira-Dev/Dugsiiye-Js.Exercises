// Understanding Callbacks

// function greet(name) {
//   console.log("Hello," + name);
// }

// function processUserInput(callback) {
//   const name = prompt("Enter ur name");
//   callback(name);
// }

// processUserInput(greet);

// function operator(a, b, callback) {
//   return callback(a, b);
// }

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// console.log("Addition", operator(5, 5, add));
// console.log("Subtract", operator(100, 50, subtract));

// Exercise 30

function operate(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log("multiply:", operate(10, 20, multiply));
console.log("division:", operate(10, 20, divide));
