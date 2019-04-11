import {
  takeLatest,
  takeEvery,
  delay,
  put,
  call,
  all
} from "redux-saga/effects";
import {
  GET_NOW_PLAYING,
  GET_NOW_PLAYING_SUCCESS,
  GET_NOW_PLAYING_FAILED,
  GET_POPULAR,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAILED,
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILED
} from "../actions/movieActions";
import { getMoviesAPI, getMovieDetailAPI } from "../api/movies";

function* fetchNowPlaying() {
  try {
    const response = yield call(getMoviesAPI, {
      category: "now_playing"
    });
    const result = response.data;

    yield put({
      type: GET_NOW_PLAYING_SUCCESS,
      results: result.results
    });
  } catch (error) {
    yield put({
      type: GET_NOW_PLAYING_FAILED,
      error: error
    });
  }
}

function* fetchPopular() {
  try {
    const response = yield call(getMoviesAPI, {
      category: "popular"
    });
    const result = response.data;

    yield put({
      type: GET_POPULAR_SUCCESS,
      results: result.results
    });
  } catch (error) {
    yield put({
      type: GET_POPULAR_FAILED,
      error: error
    });
  }
}

function* fetchMovieDetail({ id }) {
  try {
    const response = yield call(getMovieDetailAPI, id);
    const result = response.data;

    yield put({
      type: GET_MOVIE_DETAIL_SUCCESS,
      data: result
    });
  } catch (error) {
    yield put({
      type: GET_MOVIE_DETAIL_FAILED,
      error: error
    });
  }
}

function* rootSaga() {
  yield all([
    yield takeLatest(GET_NOW_PLAYING, fetchNowPlaying),
    yield takeLatest(GET_POPULAR, fetchPopular),
    yield takeLatest(GET_MOVIE_DETAIL, fetchMovieDetail)
  ]);
}

export default rootSaga;
