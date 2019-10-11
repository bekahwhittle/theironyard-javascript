import { connect } from 'react-redux'
import container from '../containers/all.js'

export default function getCategory () {
  return (dispatch) => {

      let url = 'http://jservice.io/api/categories?count=6'
      return  $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json'
      }).then(function (response) {
        console.log(response);
        response.forEach(function(item){
          var catID = item.id;
          console.log(catID);
          $.ajax({
            url: `http://jservice.io/api/clues?category=${catID}`,
            method: 'GET',
            dataType: 'json'
          }).then(function (response){
            dispatch(
              {
                type: "CREATE_CATEGORY",
                catData: response
             }
            );
          })
        })
      })
  }
}
