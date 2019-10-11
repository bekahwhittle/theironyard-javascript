import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import getMetroId from '../actions/get_metro_id.js'
import Loader from '../components/loader.js'

class Location extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      locationInput: ""
    }
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation (e, { history }) {
    if (e.keyCode === 13) {
      this.setState ({
        locationInput: e.target.value
      })

      this.props.dispatch(getMetroId(e.target.value, this.props.history));
      e.target.value = "";
    }
  }

  render () {
    return (
      <main className="container">
        <div className="img-container">
          <svg className="music-wave-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-14 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z"/>
          </svg>
          <div className="input-wrapper">
            <input onKeyUp={this.getLocation} className="location-input" type="text" name="location" placeholder="City, ST & Enter" />
          </div>
          </div>
          <p className="cta">Discover live music near you.</p>
          <div>
          <div className="btn-wrapper">
            <button className="discover-btn">Discover</button>
          </div>
        </div>
      </main>
    );
  }
}

export default connect(container.allState) (Location)
