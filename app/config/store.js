import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";

import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (__DEV__) {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
