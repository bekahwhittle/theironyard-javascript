import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

export default React.createClass({
  getInitialState: function() {
    return {
      checked: false,
      read: false
    };
  },

  checkHandler: function() {
    this.setState({
      checked: true,
      read: false
    });
  },

  readHandler: function () {
    this.setState({
      checked: true,
      read: true
    })
  },

  read: function () {
    return (
      <div>
        <label className="markAsRead" htmlFor="checkBox">Read</label>
        <input className="markAsRead" id="checkBox" type="checkbox" checked={this.state.checked} disabled="disabled"/>
      </div>
    )
  },

  cancel: function () {
    this.setState({
      checked: false
    })
  },

  modal: function () {
    if (this.state.read === true) {
      return (
        <div>{this.read()}</div>
      )
    }
    return (
      <div>
        <p className="markAsRead" htmlFor="checkBox">Are you sure?</p>
        <button onClick={this.readHandler}>✅</button>
        <button onClick={this.cancel}>❌</button>
      </div>
    )
  },

  default: function () {
    return (
        <div>
          <label className="markAsRead" htmlFor="checkBox">Mark As Read</label>
          <input className="markAsRead" onClick={this.checkHandler} id="checkBox" type="checkbox" checked={this.state.checked}  />
        </div>
      )
  },

  render () {
    if (this.state.checked === true) {
      return (
        <div>
          <div>{this.modal()}</div>
        </div>
      )
    }
    else {
      return (
        <div>{this.default()}</div>
      )
    }
  }
});
