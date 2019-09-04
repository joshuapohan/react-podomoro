import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import Config from "./components/Config";
import rootReducer from "./reducers";
import { HashRouter, Route } from "react-router-dom";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/config" component={Config} />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
