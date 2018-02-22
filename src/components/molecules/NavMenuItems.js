// Default Imports
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI Imports
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import FlatButton from 'material-ui/Button'
import HomeIcon from 'material-ui-icons/Home'
import UserIcon from 'material-ui-icons/AccountCircle'
import DashIcon from 'material-ui-icons/Dashboard'
import LockOpenIcon from 'material-ui-icons/LockOpen'
import ContactIcon from 'material-ui-icons/Contacts'
import FPIcon from 'material-ui-icons/Fingerprint'
// Libraries and Frameworks
import RBRoute from '../../RBRoute'

// Axios calls
function destroyUserSession () {
  RBRoute().delete('users/sign_out').then(() => {
    RBRoute().get('/')
  })
}

// Lists
export const mainNavMenuItems = (
  <React.Fragment>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary='Home Page' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <UserIcon />
      </ListItemIcon>
      <ListItemText primary='Account' />
    </ListItem>
  </React.Fragment>
)

export const loggedInItems = (
  <React.Fragment>
    <ListItem button onClick={destroyUserSession}>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary='Log Out' />
    </ListItem>
  </React.Fragment>
)

export const loggedOutItems = (
  <React.Fragment>
    <ListItem button component='a' href='/users/sign_up'>
      <ListItemIcon>
        <FPIcon />
      </ListItemIcon>
      <ListItemText primary='Sign Up' />
    </ListItem>
    <ListItem button component='a' href='/users/sign_in'>
      <ListItemIcon>
        <ContactIcon />
      </ListItemIcon>
      <ListItemText primary='Sign In' />
    </ListItem>
  </React.Fragment>
)
