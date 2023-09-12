// file : AyesOnAi\backend\backend\src\utilities\users-service.js



// Serice modules hold the code that implements
// "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as usersAPI from './users-api';
import sendRequest from "./send-request";
const BASE_URL = "http://localhost:3001/api/users"; // Update the URL as needed

export async function signUp(userData) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Let's check if token has expired...
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ?
    JSON.parse(atob(token.split('.')[1])).user
    :
    null;
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}




// ... (existing code)

export async function deleteUser(userId) {
  const token = getToken();
  if (!token) {
    throw new Error("User is not authenticated.");
  }

  try {
    const response = await sendRequest(
      `${BASE_URL}/${userId}`,
      "DELETE"
    );

    if (response.success) {
      return response.message;
    } else {
      throw new Error(response.message || "Failed to delete user.");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user.");
  }
}

