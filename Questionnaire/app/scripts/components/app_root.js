import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'


class AppRoot extends React.Component {
  constructor (props) {
    super(props)

    this.onStartClicked = this.onStartClicked.bind(this);
  }

  onStartClicked ({ history }) {
    let url = "/questions/0";
    console.log(this.props.history);
    this.props.history.push(url);
  }

  render () {
    return (
        <section>
          <h2 className="slogan">Chew On This.</h2>
          <h5 className="cta">We want to provide the best chewing gum possible and would like your feedback. Please fill out this 10 question survey!</h5>
          <div className="btn-container">
          <input id="name-input" className="name-input"type="text" placeholder="Name" />
          </div>
          <div className="btn-container">
          <button onClick={this.onStartClicked} className="start">Start</button>
          </div>
        </section>
    );
  }
}

export default connect(container.allState)(AppRoot)
