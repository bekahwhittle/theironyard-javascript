import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import marked from "marked";
import Markdown from "./md-output.js";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let input = e.target.value;
    this.props.dispatch({
      type: "INPUT",
      post: input
    });
  }

  render() {
    var marked = require("marked");
    console.log(marked("I am using __markdown__."));

    return (
      <div>
        <h2 className="slogan">Your thoughts.</h2>
        <h5 className="cta">
          Please submit anything else you believe could better our delicious chewing gum!
        </h5>
        <textarea
          rows="5"
          cols="35"
          className="answer-input"
          onKeyUp={this.handleInput}
          name="textarea"
          type="text"
          placeholder="Pop the bubble. . ."
        />
        <Markdown />
        <button className="direction">Save</button>
      </div>
    );
  }
}

export default connect(container.allState)(Text);
