// Introduction to HTTP Requests

// async function fetchData() {
//   try {
//     console.log("Start fetching data...");
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status:${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Response data:", data);
//   } catch (error) {
//     console.log("Error fetching data:", error);
//   }
// }
// fetchData();

// Exercise 31

async function fetchUsers() {
  try {
    console.log("Start fetching users...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    console.log("List of Users:", users);
  } catch (error) {
    console.log("Error fetching users");
  }
}
fetchUsers();
