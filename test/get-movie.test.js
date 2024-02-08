import { jest } from '@jest/globals'
import { get_movie_by_id } from "../javascript/get-movie.js"
import { mockedMovie } from "./mocked-movie.js";
import { OPTIONS } from '../javascript/constants.js';


describe('movie by id service', () => {
  it('API call successful should return movie by id', async () => { 
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(mockedMovie),
      status: 200,
      statusText: "OK"
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const movie = await get_movie_by_id("tt10872600");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://moviesdatabase.p.rapidapi.com/titles/tt10872600?info=base_info`, OPTIONS);
    expect(movie).toEqual(mockedMovie);
  });

  it('API call returns null when movie does not exist', async() =>{
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(null),
      status: 200,
      statusText: "OK"
    });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);

      const movie = await get_movie_by_id("tt108726");

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`https://moviesdatabase.p.rapidapi.com/titles/tt108726?info=base_info`, OPTIONS);
      expect(movie).toEqual(null);
       
    }
  );
  
  it('API call throws forbidden message when wrong API keys', async() =>{
    const mockFetch = Promise.reject({
      text: "Failed to fetch movie",
      status: 403,
      statusText: 'Forbidden'
    });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);

      try {
        await get_movie_by_id("tt10872600");
      } catch (error) {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(error).toBe(mockFetch.text);
    }
  });
});
   