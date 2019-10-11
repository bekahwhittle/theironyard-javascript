import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'


class StartPage extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      inputName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.keyCode === 13) {
      console.log("💃💃💃💃");
      console.log(e.target.value);
      this.setState({
        inputName: e.target.value
      })
      this.props.dispatch ({
        type: "LOGIN",
        username: e.target.value
      })
      e.target.value = ""
    }
  }

  render () {
    return (
      <div className="login-form">
        <div className="form">
            <h1 className="title">WELCOME TO HELL</h1>
            <input onKeyUp={this.handleChange} id="name-input" className="name-input"type="text" placeholder="Name" />
          </div>
        </div>
    );
  }
}

export default connect(container.allState)(StartPage);
