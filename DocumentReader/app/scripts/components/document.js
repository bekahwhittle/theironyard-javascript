import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import DocumentRead from '../components/document_read.js'

export default React.createClass({



  render: function () {
    return (
      <div className="form">
        <p className="login-form">Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened.
        Happiness never decreases by being shared.
        </p>
        <DocumentRead />
      </div>
    );
  }
});
