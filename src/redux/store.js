import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// Middleware
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Create the saga middleware
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleware))
);

export default store;
