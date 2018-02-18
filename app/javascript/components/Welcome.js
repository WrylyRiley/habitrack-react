import React from 'react'
import PropTypes from 'prop-types'
class Welcome extends React.Component {
  render () {
    return (
      <div>
        <h1>
          {this.props.greeting}, Zach!
        </h1>
      </div>
    )
  }
}

Welcome.propTypes = {
  greeting: PropTypes.string
}
export default Welcome
