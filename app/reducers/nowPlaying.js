import {
  GET_NOW_PLAYING,
  GET_NOW_PLAYING_SUCCESS,
  GET_NOW_PLAYING_FAILED
} from "../actions/movieActions";

const INITIAL_STATE = {
  results: [],
  loading: false,
  error: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_NOW_PLAYING_SUCCESS:
      return {
        results: action.results,
        loading: false,
        error: false
      };
    case GET_NOW_PLAYING_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
  }

  return state;
};

export default reducer;
