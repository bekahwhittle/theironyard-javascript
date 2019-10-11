export default function addTask (name, description, state, important, date) {

  var user = store.getState().token;
  $.ajax({
    type: 'POST',
    url: 'https://api.backendless.com/v1/data/DayToDay',
    dataType: 'json',
    headers: {
      "application-id": "3B22432C-46F8-6E21-FF4E-711B8EE8C700",
      "secret-key": "2969BC54-CE9A-CEC2-FF28-3EE0F6CA1F00",
      "Content-Type": "application/json",
      "application-type": "REST",
      "user-token": user
    },
    data: JSON.stringify({
      "description": "Send message to Calla on LinkedIn and let her know you're intersted in the job!",
      "due": 1491350400000,
      "important": true,
      "name": "HELLO WORLD",
      "state": "Not-Started"
    })
  }).then((response) => {
      store.dispatch({ type: 'RELOAD_TASKS', response: response  })
  })



}
