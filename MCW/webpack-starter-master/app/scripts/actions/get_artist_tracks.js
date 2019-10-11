import { connect } from 'react-redux'
import container from '../containers/all.js'
import getArtistId from './get_artist_id.js'

export default function getArtistTracks (artistId) {
  return (dispatch) => {
    let url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`;
    return $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
    }).then(function (artistTracks){
      let topTracks = artistTracks.tracks;
      if (topTracks.length > 0) {
        let songObj = topTracks.map((track) => {
          return {
            name: track.name,
            src: track.preview_url
          };
        })
        dispatch({ type: "STORE_SOUNDCLIPS", soundclips: songObj, artistId: artistId })
      }
    })
  }
}
