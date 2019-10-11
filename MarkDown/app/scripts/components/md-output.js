import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import Text from "./text-input.js";
import marked from "marked";

class Markdown extends React.Component {
  constructor(props) {
    super(props);
  }

  createMarkup() {
    return { __html: marked(this.props.value) };
  }

  render() {
    var marked = require("marked");
    return (
      <div>
        <div className="output" dangerouslySetInnerHTML={this.createMarkup()} />
        {console.log(this.props.value)}
      </div>
    );
  }
}

export default connect(container.allState)(Markdown);
