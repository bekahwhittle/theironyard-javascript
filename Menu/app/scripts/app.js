import { createStore } from 'redux'
import menuView from './menu-view.js';
import ajax from './ajax.js';

export default function app() {

  let cafeUrl = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json';

  const initialState = {
    menuOptions: [],
    order: [],
    view: menuView
  };
  console.log(ajax);

  switch(action.type) {
      case "MENU_VIEW":
        var newState = {
          menuOptions: [],
          order: action.order,
          view: menuView
        };

        $.getJSON(url).then((data) => {
          setTimeout(() => {
            store.dispatch({ type: "TODOS_LOADED", todos: data });
          }, 2000);
          // This 'setTimeout' is only here so I can see my loading animation.
        });

        return Object.assign({}, currentState, newState);

          const store = createStore(reducer, applyMiddleware( logger ));

          const render =  function () {
            let state = store.getState();
            $('#app').html(state.view(store));
          }

          //The store will now run our 'render' function after every event is dispatched.
          store.subscribe(render);
          store.dispatch({ type: "NOOP" });
  // const reducer = function (currentState, action) {
  // if (currentState === undefined) {
  //   return initialState;
  // };






  console.log(createStore(function (state = [], action) {
    return state;
  }));
}
