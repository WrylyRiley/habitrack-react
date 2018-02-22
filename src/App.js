import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/compounds/NavBar'
import Welcome from './components/pages/Welcome'

class App extends Component {
  render = (
    <div class="entry">
      <NavBar user={this.props.user} />
      <main>
        <Switch>
          <Route path="/" render={props => <Welcome {...props} />} />
        </Switch>
      </main>
    </div>
  )
}
export default App
