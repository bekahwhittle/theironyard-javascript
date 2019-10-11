import { connect } from 'react-redux'

export default function getMenu () {
  return function (dispatch) {
    //Do the ajax call
    return  $.ajax({
      url: "https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json",
      method: 'GET',
      dataType: 'json'
    }).then(function (menuResponse) {
      console.log(menuResponse);
      console.log(menuResponse.sides);
    })
  }
}
