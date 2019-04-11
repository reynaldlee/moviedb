import {
  GET_POPULAR,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAILED
} from "../actions/movieActions";

const INITIAL_STATE = {
  results: [],
  loading: false,
  error: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POPULAR:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_POPULAR_SUCCESS:
      return {
        results: action.results,
        loading: false,
        error: false
      };
    case GET_POPULAR_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
  }

  return state;
};

export default reducer;
