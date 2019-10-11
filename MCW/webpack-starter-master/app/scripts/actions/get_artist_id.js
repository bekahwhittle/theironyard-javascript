import { connect } from 'react-redux'
import container from '../containers/all.js'
import Events from '../components/events.js'
import getArtistTracks from './get_artist_tracks.js'

export default function getArtistId (artistName, event) {
  return (dispatch) => {
    let url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    return $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
    }).then(function (artistResponse){
      let artistInfo = artistResponse.artists.items;
      let musicianArray = artistInfo.filter((artist, i) => {
        return artist.name == artistName;
      }).map((artist, i) => {
        dispatch(getArtistTracks(artist.id, artist.name));
        return {
          image: artist.images[1].url,
          musicianID: artist.id,
          musicianName: artist.name,
          tracks: []
        };
      })
      if (musicianArray[0]) {
        dispatch({ type: "MUSICIAN_INFO", artistTracks: musicianArray[0], event: event })
      }
    })
  }
}
