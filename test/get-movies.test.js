import { jest } from '@jest/globals'
import { get_movies } from "../javascript/get-movies.js"
import { mockedMovies } from "./fixtures/movies_fixtures.js";
import { API_URL, OPTIONS } from '../javascript/constants.js';


describe('movies service', () => {
  it('API call successful should return movies list', async () => { 
    const mockFetch = Promise.resolve({
      text: () => Promise.resolve(mockedMovies),
      status: 200,
      statusText: "OK"
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const movies = await get_movies();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API_URL, OPTIONS);
    expect(movies).toEqual(JSON.parse(mockedMovies).results);
  });

  it('API call throws error message when wrong API keys', async() =>{
    const mockFetch = Promise.reject({
      message: "You are not subscribed to this API",
      status: 403,
      statusText: 'Forbidden'
    });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);

      try {
        await get_movies();
      } catch (error) {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(error.message).toBe(mockFetch.message);
    }
  });
});
   