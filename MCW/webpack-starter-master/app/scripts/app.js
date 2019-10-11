import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Events from "./components/events.js";
import Location from "./components/location.js";
import Loader from "./components/loader.js";


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
          <Route exact path="/" component={Location} />
          <Route exact path="/events" render={props => {
            if (store.getState().events.length < 1) {
              return <Redirect to="/" />
            } else {
              return <Events {...props} />
            }
          }} />
          <Loader />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
