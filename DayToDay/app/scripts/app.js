import { createStore } from 'redux';
import loginView from './login_view.js';
import taskView from './task_view.js';
import addTask from './add_task.js';
import userRequest from './user_request.js';

export default function app() {


  const initialState = {
    currentUser: null,
    loadingTasks: false,
    tasks: [],
    view: loginView
  }

  const reducer = (currentState, action) => {
      if (currentState === undefined) {
        return initialState;
      }

      switch (action.type) {

        case 'LOGIN_VIEW':
          return currentState;

        case 'LOAD_TASKS':
          return currentState;

        case 'TASKS_LOADED':
          var tasks = [];
          console.log("LOOK AT ME:", action.response);
          action.response.forEach((task) => {
            tasks.push(task.name);
          })
          var newState = {
            loadingTasks: true,
            view: taskView,
            tasks: tasks,
            token: action.token
          }
          return Object.assign({}, currentState, newState);

        case "ADD_TASK":
          return currentState;

        case "RELOAD_TASKS":
          var tasks = store.getState().tasks;
          tasks.push(action.response.name);
          var newState = {
            tasks: tasks,
          }
          return Object.assign({}, currentState, newState);

        case "LOG_OUT":
          console.log('Logged Out');
          return Object.assign({}, initialState);

          default:
          return currentState;
      }
  }

  const store = createStore(reducer);

  const render =  function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  }

  //The store will now run our 'render' function after every event is dispatched.
  store.subscribe(render);
  store.dispatch({ type: "LOGIN_VIEW" });

}
