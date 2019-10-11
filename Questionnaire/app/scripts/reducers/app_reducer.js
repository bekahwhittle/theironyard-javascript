import Questions from '../components/questions.js'

export default function AppReducer (state, action) {
  if (state === undefined) {
    return {
      results: []
    };
  }

  switch (action.type) {
    case "ANSWER_INPUT":
      var input = action.answer;
      var identity = action.id;
      var allResults = state.results.slice();
      allResults.push(input);
      return Object.assign({}, state, {
        id: identity,
        results: allResults
      })
  }

  return state;
}
