import { connect } from 'react-redux'
import container from '../containers/all.js'

export default function getCategory () {
  return (dispatch) => {
      let url = 'http://jservice.io/api/categories?count=4';
      return $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json'
      }).then(function (categoryResponse) {
          categoryResponse.forEach(function(item){
            var catID = item.id;
            var catTitle = item.title;
            $.ajax({
              url: `http://jservice.io/api/clues?category=${catID}`,
              method: 'GET',
              dataType: 'json'
            }).then(function (clueResponse){
              dispatch({
                  type: "CREATE_CATEGORY",
                  catData: clueResponse,
                  catTitle: item.title
              });
            })
          })
      })
    }
  }
