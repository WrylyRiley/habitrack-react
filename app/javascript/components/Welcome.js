// Default Imports
import React from 'react'
import PropTypes from 'prop-types'
// My Imports
import NavBar from './compounds/NavBar'
class Welcome extends React.Component {
  render () {
    return (
      <React.Fragment>
        <NavBar user={this.props.user} />
      </React.Fragment>
    )
  }
}

export default Welcome
