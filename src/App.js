import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './components/pages/Welcome'
import NavBar from './components/compounds/NavBar'

class App extends Component {
  render = () => {
    return (
      <main>
        <NavBar user={this.props.user} />
        <Welcome />
        {/* <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch> */}
      </main>
    )
  }
}
export default App
