// Manipulating DOM Elements

// const header = document.querySelector("#header");
// console.log(header);

// const text = document.querySelector(".text");
// console.log(text);

// // changing text content

// function changeContent() {
//   header.textContent = "Welcome to my first DOM";
// }

// // changing HTML content

// function changeElement() {
//   text.innerHTML = `Hi welcome to my website <strong>Consider to hit the like button</strong> `;
// }

// Exercise 33

const header = document.querySelector("#header");
const text = document.querySelector(".text");

function changeContent() {
  header.textContent = " Welcome to Manipulating DOM Elements";
}

function changeElement() {
  text.innerHTML = `I would appreciate if you <strong> Hit the like button</strong>`;
}
