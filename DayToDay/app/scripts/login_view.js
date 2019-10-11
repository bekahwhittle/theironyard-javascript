export default function loginView (store) {

  let $loginForm = $(`
    <section id="login">
      <form class="form" action="index.html" method="post">
        <label for="username">Email: </label><input tabindex="1" id="username" class="input username" type="text" name="" value="" placeholder="email" autofocus>
        <label for="password">Password: </label><input tabindex="2" id='password' class="input password" type="password" name="" value="" placeholder="password">
        <input tabindex="3" class="loginButton" type="submit" name="" value="Login">
      </form>
    </section>
  `);

  $($loginForm).find('.form').on('submit', function (e) {
    e.preventDefault();
    let $username = $('#username').val();
    let $password = $('#password').val();
    store.dispatch({
      type: "LOAD_TASKS",
      user: $username,
      password: $password
    });
  });

  return $loginForm;
}
