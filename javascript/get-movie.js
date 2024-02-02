import { OPTIONS, API_MOVIE_ID_URL } from "./constants.js";

export const get_movie_by_id = async(movie_id) => {
    const MOVIE_ID_URL=API_MOVIE_ID_URL.replace('{id}', movie_id);
  try {
    const response = await fetch(MOVIE_ID_URL, OPTIONS);
    if (!response.ok) {
        throw new Error(`Failed to fetch movie with ID ${movie_id}`);
    }
    const result = await response.text();
    console.log(result)
    return JSON.parse(result).results;
  } catch (error) {
    console.error(error);
  }
}