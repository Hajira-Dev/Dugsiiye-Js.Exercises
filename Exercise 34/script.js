// createElement : Creates a new HTML element.
// appendChild : Adds a new element as the last child of a parent element.
// removeChild : Removes a child element from a parent element.

// const list = document.querySelector("#list");

// function addItem() {
/* console.log("addItem..."); */

//   create a new list item

//   const newItem = document.createElement("li");

//   newItem.textContent = "new Item";

//   list.appendChild(newItem);
// }

// function removeItem() {
//   if (list.lastChild) {
//     list.removeChild(list.lastChild);
//   } else {
//     alert("sxb waxba ma yaalaan");
//   }
// }

// Exercise 34

const list = document.querySelector("#list");

function addNewItem() {
  const addNewItem = document.createElement("li");
  addNewItem.textContent = "Added New Item";
  console.log(addNewItem);
  list.appendChild(addNewItem);
}
function removeItem() {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  } else {
    alert("ka naso way dhamaadeene lol");
  }
}
