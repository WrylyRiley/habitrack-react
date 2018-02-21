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
      <div>
        <List>
          {mainNavMenuItems}
        </List>
        <Divider />
        <List>
          {loggedInItems}
        </List>
      </div>
    )

    const loggedOutList = (
      <div>
        <List>
          {mainNavMenuItems}
        </List>
        <Divider />
        <List>
          {loggedOutItems}
        </List>
      </div>
    )

    return (
      <React.Fragment>
        <Drawer
          open={this.props.open}
          onClose={this.props.closeMenu}
          variant="temporary"
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.closeMenu}
            onKeyDown={this.props.closeMenu}
          >
            <List>
              {loggedOutList}
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    )
  }
}

export default NavDrawer
