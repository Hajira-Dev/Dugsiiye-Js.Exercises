// Asynchronous Programming
// Async/Await

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;

//       if (success) {
//         resolve({ id: 1, name: "Hajira" });
//       } else {
//         reject("Failed to fetch user data");
//       }
//     }, 1000);
//   });
// }

/* fetchUserData()
  .then((data) => console.log("user data", data))
  .catch((err) => console.log(err)); */

//   async/await
// async function displayUserData() {
//   try {
//     const user = await fetchUserData();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }

// displayUserData();

// Exercise 28

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

async function fetchDisplayPromise() {
  try {
    const message = await fetchReturnPromise();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
fetchDisplayPromise();
