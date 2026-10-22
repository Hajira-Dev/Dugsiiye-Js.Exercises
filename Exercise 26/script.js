// Asynchronous Programming
// synchronous = blocking
/* function fetchUserDataSync() {
  alert("Fetching user date");
  return { id: 1, name: "Hajira" };
}
console.log("Starting fetching user data...");
const user = fetchUserDataSync(); This blocks the rest of the code
console.log("User data", user);
console.log("This message is blocked until user data is fetched"); */

// Asynchronous = non-blocking
// 1000 ms = 1 second
/* setTimeout(() => {
  console.log("After 1 second");
}, 1000);
 */

// function getUserDate(callback) {
//   setTimeout(() => {
//     const user = { id: 1, name: "Hajira" };
//     callback(user);
//     /* console.log("After 5 seconds"); */
//   }, 5000);
// }

// console.log("Starting to fetch user data");

// getUserDate(function (user) {
//   console.log(user);
// });

// console.log("This message shows up immediately");

// Exercise 26
// synchronous/Blocked

function delayBlocking() {
  alert("Fetching user data...");
  return "completed blocking delay";
}
console.log("Start blocking delay...");
console.log(delayBlocking());
console.log("This message is blocked until the delation is completed");

// Asynchronous/Non-Blocked

function notDelayBlocking(callback) {
  setTimeout(() => {
    callback("completed non-blocking delay");
  }, 2000);
}
console.log("start non-blocking delay...");
notDelayBlocking((message) => {
  console.log(message);
});
