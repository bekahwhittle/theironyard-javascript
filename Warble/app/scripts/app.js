import { createStore, applyMiddleware } from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'
import loginView from './views/login_view.js'
import warbleFeed from './views/warble_feed_view.js'


export default function app() {

    const initialState = {
      session: {
        user: "",
        userToken: ""
      },
      warbles: [],
      view: loginView
    }


    const reducer = function (currentState, action) {
        if (currentState === undefined) {
          return initialState;
        }

        switch (action.type) {
            case "LOGIN_VIEW":
            console.log("LOOK AT ME");
            var newState = {
              view: loginView
            }
            return Object.assign({}, currentState, newState);

            case "LOGIN_ACTION":
            $.ajax({
              type: 'POST',
              url: 'https://api.backendless.com/v1/users/login',
              dataType: 'JSON',
              headers: {
                "application-id": "13F265B0-305B-1F34-FF9E-0DD91820C600",
                "secret-key": "7BCA26E4-2E25-D4AD-FF97-D6F19792D700",
                "Content-Type": "application/json",
                "application-type": "REST"
              },
              data: JSON.stringify({
                login: "whittlebekah@gmail.com",
                password: "1234"
              })
            }).then((data, status, xhr) => {
              console.log(data, status, xhr);
              store.dispatch {
                type: "LOAD_WARBLES"
              }
            })

            return currentState;

            case "LOAD_WARBLES":
              return Object.assign({}, currentState, newState );


            case "WARBLE_FEED_VIEW":
              var warbles = [];
              console.log("2:", action);
              var newState = {
                view: warbleFeed,
                warbles: warbles,
                token: action.token
              };

              return Object.assign({}, currentState, newState );

            default:
                console.debug(`Unhandled Action: ${action.type}!`);
                return currentState;
        };
    };

    const store = createStore(
        reducer,
        applyMiddleware(
            thunk,
            logger
        )
    );

    const render = function () {
      let state = store.getState();
      $('#app').html(state.view(store));
    }

    store.subscribe(render);
    store.dispatch({ type: "LOGIN_VIEW" })

}
