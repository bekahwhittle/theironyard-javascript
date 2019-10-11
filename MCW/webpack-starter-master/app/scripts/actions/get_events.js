import { connect } from 'react-redux'
import container from '../containers/all.js'
import getMetroId from './get_metro_id.js'
import getArtistId from './get_artist_id.js'

export default function getEvents (metroAreaID) {
  return (dispatch) => {
    let url = `http://api.songkick.com/api/3.0/metro_areas/${metroAreaID}/calendar.json?apikey=YlX4r2ab8xzzlYDB&per_page=10`;
    return $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
    }).then(function (eventsResponse){
      console.log(eventsResponse);
      let eventInfo = eventsResponse.resultsPage.results.event.map((event, i) => {
        console.log(event);
        event.performance.map((artist, j) => {
          dispatch(getArtistId(artist.displayName, event));
          return artist.displayName;
        })
        return ({
          venue: event.venue.displayName,
          date: event.start.date,
          time: event.start.time,
          id: event.id,
          artists: []
        });
      })
      dispatch({ type: "STORE_EVENTS", events: eventInfo })
    })
  }
}
// artist.displayName === artistName to hold on to?
