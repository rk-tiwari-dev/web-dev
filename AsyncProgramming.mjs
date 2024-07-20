import fetch from "node-fetch";

// Define an async function to fetch Chuck Norris jokes
async function fetchChuckNorrisJoke() {
  try {
    // Fetch a random Chuck Norris joke
    let response = await fetch("https://api.chucknorris.io/jokes/random");

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Failed to fetch Chuck Norris joke");
    }

    // Parse response as JSON
    let data = await response.json();

    // Return the joke
    return data.value;
  } catch (error) {
    console.error("Error fetching Chuck Norris joke:", error);
    throw error; // Rethrow the error to propagate it
  }
}

// Example usage: Fetch and log a Chuck Norris joke
async function logChuckNorrisJoke() {
  try {
    let joke = await fetchChuckNorrisJoke();
    console.log("Chuck Norris Joke:", joke);
  } catch (error) {
    console.error("Failed to get Chuck Norris joke:", error);
  }
}

// Call the function to log a Chuck Norris joke
logChuckNorrisJoke();
