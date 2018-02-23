// Default Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Material-UI Imports
import Card, { CardContent, CardMedia } from 'material-ui/Card'
// My Imports
import Typography from 'material-ui/Typography'

import Style from 'react-style-tag'

class Welcome extends Component {
  render = () => {
    return (
      <div classname="welcome-card">
        <Card raised>
          {/* <CardMedia image={null} title="The most stressful place on earth" /> */}
          <CardContent>
            <Typography variant="headline" component="h2">
              Thanks GA!
            </Typography>
            <Typography component="p">
              I'm working on an awesome Habit Tracking app called HabiTrack, and
              guess what! My whole initial idea is infeasible for several
              reasons. So here's what I have to satisfy the requirements for the
              project: A web site. It has some niceties, sure, but it's
              completely non-functional on the data-side. It'll be done by the
              showcase!
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

;<Style>{`
					.bullshit {
						margin-top: 30vh;
					}
					
          .welcome-card {
					height: 100vh;
					width: 100vw;
					display: flex;
					justify-content: center;
					align-items: center;
					}
        `}</Style>
