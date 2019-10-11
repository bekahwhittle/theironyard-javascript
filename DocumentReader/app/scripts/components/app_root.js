import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import Doc from '../components/document.js'


const AppRoot = React.createClass({
  render: function () {
    return (
      <section>
        <Doc />
      </section>
    );
  }
});


export default connect(container.allState)(AppRoot)
