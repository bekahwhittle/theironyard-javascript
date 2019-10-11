import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Categories from "./components/categories.js";

const Nav = () => (
  <nav>
  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Categories} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
