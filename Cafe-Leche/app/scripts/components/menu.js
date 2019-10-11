import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import getMenu from '../actions/get-menu.js'

class Menu extends React.Component {
  constructor (props) {
    super(props)
  }


  componentDidMount() {
    this.props.dispatch(getMenu());
  }

  render () {
    return (
      <main>
        <h1>cafe leche</h1>
      </main>
    )
  }
}

export default connect(container.allState)(Menu);
