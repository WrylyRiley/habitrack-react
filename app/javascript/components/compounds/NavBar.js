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

  menuHandler = () => {
    // toggles true and false of the open state of the nav drawer
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    })
  }

  render = () => {
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <NavDrawer
              user={this.props.user}
              open={this.state.navDrawerOpen}
              closeMenu={this.menuHandler}
            />
            <IconButton onClick={this.menuHandler}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title">HabiTrack</Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}

export default NavBar
