import { OPTIONS, API_MOVIE_ID_URL } from "./constants.js"

export const get_movie_by_id = async(movie_id) => {
    const MOVIE_ID_URL=API_MOVIE_ID_URL.replace('{id}', movie_id);
  try {
    const response = await fetch(MOVIE_ID_URL, OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
     console.error(error)
     throw error.message
  }
}