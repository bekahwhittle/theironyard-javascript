import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import Audio from 'react-audioplayer'
import Location from './location.js'
import getEvents from '../actions/get_events.js'
import getArtistId from '../actions/get_artist_id.js'
import getArtistTracks from '../actions/get_artist_tracks.js'

class Events extends React.Component {
  constructor (props) {
    super(props);
    this.audioPlayer = this.audioPlayer.bind(this);
  }

  audioPlayer () {
    return this.props.events.map((event) => {
      return event.artists.map((musician) => {
        let tracks = musician.tracks.filter((track) => track.src);
        if (tracks && tracks.length > 0 ) {
          return (<div className="wrapper">
             <div className="content">
              <div className="">
                <img className="artist-img" src={musician.image} />
              </div>
              <div className="musician-wrapper">
                <p className="headline"> {musician.musicianName}</p>
                <p className="venue">Venue: {event.venue}</p>
                <p className="date"> {event.date} </p>
              </div>
            </div>
            <div className="audio-player">
            <Audio
                    margin={"auto"}
                    width={100}
                    height={50}
                    autoPlay={false}
                    color={"#89E2D4"}
                    playlist={tracks}
                   />
            </div>
          </div>)
        } else {
          return <span/>
        }
      })
    })
  }

  render () {
    return (
      <main className="background">
        <div className="header">
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        <img className="user-img" src={"https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/12363263_117183368654472_3168441995227743552_o.jpg?oh=a6557dc2ad5515698585a0182afd7ac7&oe=59C0389A"} />
          <div>
            {this.audioPlayer()}
          </div>
        </div>
      </main>
    );
  }
}

export default connect(container.allState) (Events)
//
