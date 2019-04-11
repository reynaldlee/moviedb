import axios from "axios";
import { BASE_URL, API_KEY } from "../config/constant";

export const getMoviesAPI = ({ category, page = 1 }) => {
  //now-playing, popular, top-rated, upcoming

  return axios.get(
    `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${page}` //string interpolation
    // BASE_URL + "/movie/" + category + "?api_key=" + API_KEY + "&page=" + page
  );
};

export const searchMovieAPI = ({ query, page = 1 }) => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
};

export const getMovieDetailAPI = id =>
  axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images,casts`
  );
