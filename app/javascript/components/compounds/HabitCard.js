// Default Imports
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI Imports
import { Card, CardHeader, CardContent } from 'material-ui'
// My Imports
import HabitTable from '../molecules/HabitTable'

// Component
class HabitCard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Card>
          <CardHeader title='Running' />
          <CardContent>
            <HabitTable />
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }
}

export default HabitCard
