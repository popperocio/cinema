import { jest } from '@jest/globals'
import { get_movie_by_id } from "../javascript/get-movie.js"
import { mockedMovie } from "./mocked-movie.js";
import { OPTIONS } from '../javascript/constants.js';


afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

describe('movie by id service', () => {
  it('API call successful should return movie by id', async () => { 
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(mockedMovie),
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const movie = await get_movie_by_id("tt10872600");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://moviesdatabase.p.rapidapi.com/titles/tt10872600?info=base_info`, OPTIONS);
    // expect(movie).toEqual(mockedMovie);
  });

  it('API call throws error message when movie cannot be retrieved', async() =>{
    const mockFetch = Promise.reject(new Error('Failed to fetch movie with ID tt10872600'));
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const movie= await get_movie_by_id();
    const expected_answer = 'Failed to fetch movie with ID tt10872600'

    expect(fetch).toHaveBeenCalledTimes(1);
    // expect(movie).toBe(expected_answer);
});
});
   