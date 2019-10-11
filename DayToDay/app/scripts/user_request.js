export default function userRequest (login, password) {

  $.ajax({
    type: 'POST',
    url: 'https://api.backendless.com/v1/users/login',
    dataType: 'json',
    headers: {
      "application-id": "3B22432C-46F8-6E21-FF4E-711B8EE8C700",
      "secret-key": "2969BC54-CE9A-CEC2-FF28-3EE0F6CA1F00",
      "Content-Type": "application/json",
      "application-type": "REST"
    },
    data: JSON.stringify({
      login: action.user,
      password: action.password
    })
  }).then((user) => {
    $.ajax({
      type: 'GET',
      url: 'https://api.backendless.com/v1/data/DayToDay',
      dataType: 'JSON',
      headers: {
        'secret-key': '2969BC54-CE9A-CEC2-FF28-3EE0F6CA1F00',
        'application-id': '3B22432C-46F8-6E21-FF4E-711B8EE8C700',
        'user-token': user["user-token"]
      }
    }).then((response) => {
      store.dispatch({ type: 'TASKS_LOADED', response: response.data, token: user["user-token"]})
    })
  })
}
