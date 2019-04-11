import counterReducer from "../reducers/counter";
import userReducer from "../reducers/user";
import nowPlayingReducer from "../reducers/nowPlaying";
import popularReducer from "../reducers/popular";
import movieDetailReducer from "../reducers/movieDetail";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // counter: counterReducer,
  // user: userReducer,
  nowPlaying: nowPlayingReducer,
  popular: popularReducer,
  movieDetail: movieDetailReducer
});

export default rootReducer;
