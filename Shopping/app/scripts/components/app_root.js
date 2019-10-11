import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import Cart from "./cart.js";
import Shopping from "./shopping.js";

const NavBar = () => {
  return <nav />;
};

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="wrap-container">
        <div className="container">
          <NavBar />
          <section>
            <Shopping />
          </section>
        </div>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
