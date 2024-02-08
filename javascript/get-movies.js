import { OPTIONS, API_URL } from "./constants.js";

export const get_movies = async() => {
  try {
    const response = await fetch(API_URL, OPTIONS);
    if (response.statusText!= "OK") {
        throw new Error(response.status);
    }
    const result = await response.text();
    return JSON.parse(result).results;
  } catch (error) {
    throw error.message
  }
}