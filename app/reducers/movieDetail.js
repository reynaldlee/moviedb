import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILED
} from "../actions/movieActions";

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: false
      };
    case GET_MOVIE_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
  }

  return state;
};

export default reducer;
