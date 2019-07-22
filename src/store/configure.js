import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import penderMiddleware from "redux-pender";
import * as modules from "./modules";

const reducer = combineReducers(modules);
const middleWares = [penderMiddleware()];

const configure = () =>
  createStore(
    reducer,
    compose(
      applyMiddleware(...middleWares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default configure;
