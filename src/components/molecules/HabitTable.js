// Default Imports
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI Imports
import { Table, TableHead, TableBody, TableRow, TableCell } from 'material-ui'
// My Imports
import { HabitCheck } from '../atoms/HabitCheck'

// Component
class HabitTable extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Habit</TableCell>
              <TableCell>Monday</TableCell>
              <TableCell>Tuesday</TableCell>
              <TableCell>Wednesday</TableCell>
              <TableCell>Thursday</TableCell>
              <TableCell>Friday</TableCell>
              <TableCell>Saturday</TableCell>
              <TableCell>Sunday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Probs put a for each loop here with some data returned about individual habits.  */}
            <TableRow>
              <TableCell>Running</TableCell>
              <TableCell>Monday</TableCell>
              <TableCell>Tuesday</TableCell>
              <TableCell>Wednesday</TableCell>
              <TableCell>Thursday</TableCell>
              <TableCell>Friday</TableCell>
              <TableCell>Saturday</TableCell>
              <TableCell>Sunday</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

export default HabitTable
