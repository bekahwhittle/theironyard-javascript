import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import container from '../containers/all.js'


class Questions extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      questions: ["What is your favourite brand of gum?", "What is your favourite flavour of gum?",
          "How long do you chew your gum?", "Do you chew gum everyday?", "Where do you bye your gum?",
          "Would you bye Orbit or Trident?", "Do you prefer to feel fresh after chewing?",
          "What is your dream flavour of gum?", "If someone asks for gum how do you respond?",
          "Would you chew more than one stick at a time?"
      ],
      inputValue: ""
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  nextQuestion () {
    let params = (Number(this.props.match.params.id) + 1);
    let url = "/questions/" + params;
    if (params === this.state.questions.length) {
       url = "/questions/0";
    }
    this.props.history.push(url);
  }

  previousQuestion () {
    let params = (Number(this.props.match.params.id) - 1);
    let url = "/questions/" + params;
    if (Number(params) <= 0) {
       url = `/questions/${this.state.questions.length - 1}`;
    }
    this.props.history.push(url);
  }

  handleInput (e) {
    if (e.keyCode === 13) {
      console.log("💃💃💃💃🏼", e.target.value);
      this.setState({
        inputValue: e.target.value
      })
      this.props.dispatch({
        type: "ANSWER_INPUT",
        id: this.props.match.params.id,
        answer: e.target.value
      })
      e.target.value = "";
    }
  }

  render () {
    var question = this.state.questions.filter((question, index, arr) => {
      return index == this.props.match.params.id;
    })[0];
    return (
      <main>
        <h3 className="question-header"></h3>
        <h5 className="cta question">{question}</h5>
        <div className="btn-container">
        <input onKeyUp={this.handleInput} id="answer-input" className="answer-input"type="text" placeholder="Answer & Enter" />
        </div>
        <div className="btn-container">
        <button onClick={this.previousQuestion} className=" direction">Previous</button>
        <button onClick={this.nextQuestion} className=" direction">Next</button>
        </div>
      </main>
    );
  }
}
export default connect(container.allState)(Questions);
