import React from 'react'
import PropTypes from 'prop-types'
class Footer extends React.Component {
  state = {
    year: 2018
  }

  componentDidMount = () => {
    this.setState({
      year: Date.now.getFullYear()
    })
  }
  render() {
    return <div />
  }
}

export default Footer
