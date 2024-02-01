import { jest } from '@jest/globals'
import { get_movies } from "../javascript/get-movies.js"
import { mockedMovies } from "./fixtures/movies_fixtures.js";
import { API_URL, OPTIONS } from '../javascript/constants.js';


describe('movies service', () => {
  it('API call successful should return movies list', async () => { 
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(mockedMovies),
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const movies = await get_movies();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API_URL, OPTIONS);
    // expect(movies).toEqual(mockedMovies);
  });

  it('API call throws error message when movies cannot be retrieved', async() =>{
      const mockFetch = Promise.reject(new Error('Failed to fetch movies'));
      global.fetch = jest.fn().mockImplementation(() => mockFetch);

      const movies = await get_movies();
      const expected_answer = 'Failed to fetch movies'

      expect(fetch).toHaveBeenCalledTimes(1);
      // expect(movies).toBe(expected_answer);
  });
});
   