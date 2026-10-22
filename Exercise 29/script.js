// Asynchronous Programming
// Understanding JSON with Non-Blocking Code

// const user = {
//   id: 1,
//   name: "Hajira",
//   city: "Hamburg",
// };

// // Object to JSON
// const jsonString = JSON.stringify(user);
// console.log(jsonString);

// // JSON to Object
// const parsedData = JSON.parse(jsonString);
// console.log(parsedData);

// async function fetchData() {
//   console.log("start fetching data");

//   const response = await fetch("./data.json");

//   const data = await response.json();

//   console.log("response:", data);
// }

// fetchData();

async function fetchJsonData() {
  console.log("Start fetching data...");

  const response = await fetch("data.json");
  const data = await response.json();

  console.log("Fetch JSON Data:", data);
}
fetchJsonData();
