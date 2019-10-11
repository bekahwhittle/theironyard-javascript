export default function loginView (store) {
  let state = store.getState();

  //Create the HTML
  let $html = $(`
    <div id="login-container">
      <header>
        <h2>Log in to Warble</h2>
      </header>
      <img src="" alt="">
      <input id="email-sign-in" type="text" name="" value="" placeholder="Email">
      <input id="password-sign-in" type="text" name="" value="" placeholder="Password">
      <button id="login-btn"type="button" name="button">Log In</button>
      <footer>Sign Up for Warble</footer>
    </div>
    `);

    $($html).find('#login-btn').on('click', (e)=>{
      e.preventDefault();
      let $email = $('#email-sign-in').val();
      let $password = $('#password-sign-in').val();
      store.dispatch({
        type:'LOGIN_ACTION',
        user: $email,
        password: $password
      });
    });

  //Return the html
  return $html;
}
