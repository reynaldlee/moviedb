export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const GET_NOW_PLAYING_SUCCESS = "GET_NOW_PLAYING_SUCCESS";
export const GET_NOW_PLAYING_FAILED = "GET_NOW_PLAYING_FAILED";

export const GET_POPULAR = "GET_POPULAR";
export const GET_POPULAR_SUCCESS = "GET_POPULAR_SUCCESS";
export const GET_POPULAR_FAILED = "GET_POPULAR_FAILED";

export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const GET_MOVIE_DETAIL_SUCCESS = "GET_MOVIE_DETAIL_SUCCESS";
export const GET_MOVIE_DETAIL_FAILED = "GET_MOVIE_DETAIL_FAILED";

//action creator
export const getNowPlaying = () => ({
  type: GET_NOW_PLAYING
});

export const getPopular = () => ({
  type: GET_POPULAR
});

export const getMovieDetail = id => ({
  type: GET_MOVIE_DETAIL,
  id
});
