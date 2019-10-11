import React from "react";
import { connect } from "react-redux"
import container from '../containers/all.js'
import { Route, Link, NavLink } from "react-router-dom";


class AppRoot extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <main>
      </main>
    );
  }
}

export default connect(container.allState) (AppRoot);
