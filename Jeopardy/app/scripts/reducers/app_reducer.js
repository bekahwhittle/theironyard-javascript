export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      categories: [],
      total: 0
    };
  }

  switch (action.type) {

    case "CREATE_CATEGORY":
      let newCategories = state.categories.slice();
      newCategories.push({
        categoryTitle: action.catTitle,
        clues: action.catData
      });
      return Object.assign({}, state, {
        categories: newCategories
    });

    case "ANSWER_INPUT":
      console.log(action.guess.toUpperCase);
      let newCategories = state.categories.map((category, i){
        category.clues.map((clue, j){
          return clue;
        })
      })
      console.log(newCategories);
      // if (action.guess.toUpperCase() === state.questions.answer.toUpperCase()) {
      //  var newTotal = state.total + state.questions.value;
      //  console.log(newTotal);
      //  return Object.assign({}, state, {
      //    total: newTotal
      //  });
      // }
      // else {
      //   var newTotal = state.total;
      //   console.log(newTotal);
      //   return Object.assign({}, state, {
      //     total: newTotal
      //   });
      // }
  }

  console.log("Unhandled State!");
  return state;
}
