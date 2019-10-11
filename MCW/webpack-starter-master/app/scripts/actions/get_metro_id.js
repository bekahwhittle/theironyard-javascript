import { connect } from 'react-redux'
import container from '../containers/all.js'
import getEvents from './get_events.js'

export default function getMetroId(location, history) {
  return (dispatch) => {
    let url = `http://api.songkick.com/api/3.0/search/locations.json?query=${location}&apikey=YlX4r2ab8xzzlYDB`;
    dispatch({
      type: "ENTER_LOADING"
    })
    return $.ajax({
      url: url,
      method: 'GET',
      dataType:'json',
    }).then(function (locationResponse){
      let locationArray = locationResponse.resultsPage.results.location;
      locationArray.map((localObj, i) => {
        let metroAreaID = localObj.metroArea.id;
        dispatch(getEvents(metroAreaID));
        return metroAreaID;
      })
    }).then(function (){
      setTimeout(() => {
        dispatch({ type: "LEAVE_LOADING" })
        history.push("/events");
      }, 2000);
    })
  }
}
