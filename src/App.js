import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import configure from "./store/configure";
import { ListPage, PostPage, EditorPage, NotFoundPage } from "./pages";

const store = configure();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListPage} />
          <Route path="/page/:page" component={ListPage} />
          <Route path="/tag/:tag/:page?" component={ListPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/editor" component={EditorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
