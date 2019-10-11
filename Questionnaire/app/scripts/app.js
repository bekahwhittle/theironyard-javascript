import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import Questions from './components/questions.js'
import Results from './components/results.js'

const NavBar = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="nav-elem">Start</NavLink>
      <NavLink to="/questions/0" className="nav-elem">Questions</NavLink>
      <NavLink to="/results" className="nav-elem">Results</NavLink>
    </nav>
  )
}
export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <main className="wrap-container">
          <div className="container">
            <NavBar/>
            <Route exact path="/" component={AppRoot}/>
            <Route exact path="/questions/:id" component={Questions} />
            <Route path="/results" component={Results} />
          </div>
        </main>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
