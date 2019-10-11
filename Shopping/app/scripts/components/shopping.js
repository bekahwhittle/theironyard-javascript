import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import Cart from "./cart.js";

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    // this.toCart = this.toCart.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    return () => {
      console.log("hi there");
      this.props.dispatch({
        type: "ADD_ITEM",
        item: item
      });
    };
  }

  render() {
    return (
      <div>
        <section>
          <h2 className="slogan">All Items:</h2>
          {this.props.items.map(item => {
            return (
              <section className="cta" key={item.id}>
                <div className="question-header">{item.name}</div>
                <div className="results">{item.price}</div>
                <button className="start" onClick={this.handleClick(item)}>
                  ADD
                </button>
              </section>
            );
          })}
          <Cart />
        </section>
      </div>
    );
  }
}

export default connect(container.allState)(Shopping);
