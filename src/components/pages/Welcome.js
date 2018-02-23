import React, { Component, Fragment } from 'react'

import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

import Style from 'react-style-tag'

class Welcome extends Component {
  render = () => {
    return (
      <Fragment>
        <div className="bullshit">
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={24}
          >
            <Grid item xs={6}>
              <Card raised>
                <CardMedia
                  image='../../assets/images/General_Assembly.jpg'
                  title="The most stressful place on earth"
                />
                <CardContent>
                  <Typography variant="headline" component="h2">
                    Thanks GA!
                  </Typography>
                  <Typography component="p">
                    I'm working on an awesome Habit Tracking app called
                    HabiTrack, and guess what! My whole initial idea is
                    infeasible for several reasons. So here's what I have to
                    satisfy the requirements for the project: A deployed web
                    site. It has some niceties, sure, but it's completely
                    non-functional on the data-side. It'll be done by the
                    showcase!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <Style>{`
					.bullshit{
						display: flex;
						justify-content: center;
						align-items: center;
						height: 95vh;
					}
				`}</Style>
      </Fragment>
    )
  }
}

export default Welcome
