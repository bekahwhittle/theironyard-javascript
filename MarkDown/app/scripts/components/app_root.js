import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import Text from "./text-input.js";
import Markdown from "./md-output.js";

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
            <Text />
          </section>
        </div>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
