// Asynchronous Programming
// Promises

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;

//       if (success) {
//         resolve({ id: 1, name: "Hajira" });
//       } else {
//         reject("Failed to fetch user data");
//       }
//     }, 5000);
//   });
// }

// fetchUserData()
//   .then((data) => console.log("user data", data))
//   .catch((err) => console.log(err));

// Exercise 27

function fetchReturnPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetch succeeded");
      } else {
        reject("Data fetch failed");
      }
    }, 2000);
  });
}

fetchReturnPromise()
  .then((message) => console.log("Data fetch succeeded"))
  .catch((message) => console.log("Data fetch failed"));
