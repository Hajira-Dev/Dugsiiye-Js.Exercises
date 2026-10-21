// ES6 Basics

// function greet(name = "friend") {
//   console.log(`Hello ${name}`);
// }

// greet("Hajira");

// Exercise 24 Default Parameters
let width = 10;

function calculateArea(width, height = width) {
  return width * height;
}

console.log(calculateArea(width, 5));
console.log("Not given height");
console.log(calculateArea(width));
