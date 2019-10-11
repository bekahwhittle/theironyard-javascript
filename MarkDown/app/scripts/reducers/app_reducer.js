export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      value: ""
    };
  }

  switch (action.type) {
    case "INPUT":
      console.log("YOU FIRED A REQUEST");
      return Object.assign({}, state, { value: action.post });
  }

  console.log("Unhandled State!");
  return state;
}
