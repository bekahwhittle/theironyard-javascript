import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(item) {
    return () => {
      this.props.dispatch({
        type: "REMOVE_ITEM",
        item: item
      });
    };
  }

  updateTotal() {}

  render() {
    return (
      <section>
        <h2 className="cta">Cart:</h2>
            {this.props.cart.map(item => {
              return (
                  <section key={item.id}>
                    <div className="question-header">{item.name}</div>
                    <div className="results">{item.price}</div>
                    <button  className="direction" onClick={this.handleRemove(item)}> REMOVE </button>
                  </section>
              );
            })}
        <div className="total">{this.props.total}</div>
      </section>
    );
  }
}

export default connect(container.allState)(Cart);
