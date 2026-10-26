// function changeImage() {
//   const image = document.querySelector("#image");

//   //   const url = prompt("Enter ur image url");

//   image.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1792983719754-f6618165db57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//   );
// }

// // Element.style.
// image.style.border = "2px, solid, blue";
// image.style.padding = "20px";

// // background color
// image.style.backgroundColor = "#cfc2dc";

// function changeContentStyle() {
//   const header = document.querySelector("#header");
//   const text = document.querySelector(".text");

//   header.style.color = "skyblue";
//   text.style.padding = "20px";
//   text.style.border = "2px solid black";
//   text.style.fontSize = "30px";
// }

// function setLightMode() {
//   document.body.style.backgroundColor = "white";
//   document.body.style.color = "black";
// }

// function setDarkMode() {
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "white";
// }

// Exercise 35

function changeImage() {
  const image = document.querySelector("#image");

  const url = prompt("Please enter ur image url");
  const borderColor = prompt("Please enter ur desired border color");
  const width = prompt(
    "Please enter ur desired width of the image (in pixels) ",
  );
  const height = prompt(
    "Please enter ur desired height of the image (in pixels) ",
  );
  const borderRadius = prompt(
    "Please enter ur desired border radius (in pixels) ",
  );

  image.setAttribute("src", url);
}
