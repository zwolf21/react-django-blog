import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure from "./store/configure";

const store = configure();

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>React Django Blog</BrowserRouter>
    // </Provider>
  );
}

export default App;
