// ES6 Basics

// Spread Operator

/* let numbers = [1, 2, 3, 4];

const allNumbers = [...numbers, 5, 6, 7, 8, 9, 10];

console.log(allNumbers); */

// Rest Operator

/* function sum(...numbers) {
  return numbers.reduce((total, num) => total * num, 1);
}

console.log(sum(10, 20, 30)); */

// Exercise 25

// Spread Operator
const numbers = [1, 2, 3];
const allNumbers = [...numbers, 4, 5, 6];
console.log(allNumbers);

// Rest Operator
function product(...numbers) {
  return numbers.reduce((total, num) => total * num, 1);
}
console.log(product(50, 60, 70, 80, 90));
