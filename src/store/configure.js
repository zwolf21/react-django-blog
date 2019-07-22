import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import penderMiddleware from "redux-pender";
import * as modules from "./modules";

const reducer = combineReducers(modules);
const middleWares = [penderMiddleware()];

// const isDev = (process.env.NODE_ENV = "development");
// const devTools =
//   isDev &&
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__();
// const composeEnhancers = devTools || compose;

// const configure = preloadedState =>
//   createStore(
//     reducer,
//     preloadedState,
//     composeEnhancers(applyMiddleware(...middleWares))
//   );

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
