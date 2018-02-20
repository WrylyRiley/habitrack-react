// Default Imports
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI Imports
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
// My Component Imports
import NavDrawer from './NavDrawer'
// Component
class NavBar extends React.Component {
  state = {
    navDrawerOpen: false
  }

  menuButtonClick = prevState => {
    // toggles true and false of the open state of the nav drawer
    this.setState({
      navDrawerOpen: !prevState.navDrawerOpen
    })
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* <NavDrawer open={this.state.navDrawerOpen} /> */}
            <IconButton onClick={this.menuButtonClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title">HabiTrack</Typography>
            {/* Title */}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NavBar
