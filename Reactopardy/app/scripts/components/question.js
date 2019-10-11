import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reveal: false,
      inputValue: ""
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    if (e.keyCode === 13) {
      this.setState({
        inputValue: e.target.value
      })
      this.props.dispatch({
        type: "ANSWER_INPUT",
        guess: e.target.value
      })
      e.target.value = "";

    }
  }

  clickHandler () {
    this.setState({
      reveal: !this.state.reveal
    })
  }

  render () {
    let question = ""
    if (this.state.reveal === true) {
      question = (
        <span>
          <div onClick={this.clickHandler} className="modal-background-cover">
          </div>
          <div className="modal-question question-text">{this.props.question.question}
            <div className="container-input">
              <input id="input-question" onKeyUp={this.handleChange} className="answer-input" type="text" placeholder="Answer" />
            </div>
          </div>
        </span>
      );
    }
    return (
      <div>
        <li className="question">
          <h3 className="categoryH3">{this.props.question.category.title}</h3>
          <button onClick={this.clickHandler} className="value">{this.props.question.value}</button>
        </li>
        {question}
      </div>
    );
  }
}

export default connect(container.allState) (Question);
