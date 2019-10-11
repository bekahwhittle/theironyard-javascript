import CategoryView from '../components/category_view.js'

export default function AppReducer (state, action) {
  if (state === undefined) {
    return {
      questions: [
        {
          "id":43461,
          "answer":"Wednesday",
          "question":"It takes the greatest number of Scrabble tiles to spell out this day of the week",
          "value":300,
          "category_id":5356,
          "category": {
            "id":5356,
            "title":"that'll be the day" ,
            "clues_count":5
          }
        },
        {
          "id": 1,
          "answer": "Election Day",
          "question": "1st Tuesday after the 1st Monday in November",
          "value": 100,
          "airdate": "1985-02-08T12:00:00.000Z",
          "created_at": "2014-02-11T22:47:18.786Z",
          "updated_at": "2014-02-11T22:47:18.786Z",
          "category_id": 1,
          "game_id": null,
          "invalid_count": null,
          "category": {
            "id": 1,
            "title": "politics",
            "created_at": "2014-02-11T22:47:18.687Z",
            "updated_at": "2014-02-11T22:47:18.687Z",
            "clues_count": 30
          }
        }
      ],
      total: 0,
      categories: []
    };
  }

  switch (action.type) {

    case "CREATE_CATEGORY":
      let newCategories = state.categories.slice();
      newCategories.push(action.catData);
      return Object.assign({}, state, {
        categories: newCategories
      })


    case "ANSWER_INPUT":
      if (action.guess.toUpperCase() === state.questions[0].answer.toUpperCase()) {
         var newTotal = state.total + state.questions[0].value;
         console.log(newTotal);
         return Object.assign({}, state, {
           total: newTotal
         });
      }
      else {
        var newTotal = state.total;
        console.log(newTotal);
        return Object.assign({}, state, {
          total: newTotal
        });
      }
  }
  return state;
}
