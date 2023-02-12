import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// Middleware
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
