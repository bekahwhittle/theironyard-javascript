import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import getMetroId from '../actions/get_metro_id.js'

class Loader extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.loading) {
      return (
        <section>
            <div className="loader">Loading...</div>
        </section>
      )
    } else {
      return (<span/>);
    }
  }
}


export default connect(state => ({ loading: state.loading }))(Loader)
