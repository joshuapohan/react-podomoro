import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import Config from "./components/Config";
import rootReducer from "./reducers";
import { BrowserRouter, Route } from "react-router-dom";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/config" component={Config} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
