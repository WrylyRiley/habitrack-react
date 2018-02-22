// Default Imports
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI Imports
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
// My imports
import {
  mainNavMenuItems,
  loggedInItems,
  loggedOutItems
} from '../molecules/NavMenuItems'
// Component
class NavDrawer extends React.Component {
  render = () => {
    const loggedInList = (
      <React.Fragment>
        {mainNavMenuItems}
        <Divider />
        {loggedInItems}
      </React.Fragment>
    )

    const loggedOutList = (
      <React.Fragment>
        {mainNavMenuItems}
        <Divider />
        {loggedOutItems}
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <Drawer
          open={this.props.open}
          onClose={this.props.closeMenu}
          variant="temporary"
        >
          {/* Required, but idk why */}
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.closeMenu}
            onKeyDown={this.props.closeMenu}
          >
            {this.props.user
              ? <List component="nav">
                  {loggedInList}
                </List>
              : <List component="nav">
                  {loggedOutList}
                </List>}
          </div>
        </Drawer>
      </React.Fragment>
    )
  }
}

export default NavDrawer
