import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import throttle from 'lodash.throttle'

// import TestGrid from 'components/TestGrid'
import Home from 'routes/Home'

import styles from './App.module.scss'
import grid from 'styles/grid.module.scss'

class App extends Component {
  propTypes: {
    disabled: PropTypes.bool,
    throttle: PropTypes.number.isRequired
  }

  defaultProps: {
    disabled: false,
    throttle: 300
  }

  constructor(props) {
    super(props)

    this.state = {
      docHeight: 0,
      pageYOffset: 0,
      scrollPosition: 0,
      backgroundPosition: '0% 0%'
    }

    this.addListener = this.addListener.bind(this)
    this.removeListener = this.removeListener.bind(this)
    this.handleScroll = throttle(this.handleScroll.bind(this), props.throttle)
  }

  componentDidMount() {
    if (!this.props.disabled) {
      this.addListener()
    }
  }

  componentWillUnmount() {
    this.removeListener()
  }

  UNSAFE_componentWillUpdate({ disabled }) {
    if (this.props.disabled !== disabled) {
      if (disabled) {
        this.removeListener()
      } else {
        this.addListener()
      }
    }
  }

  addListener() {
    window.addEventListener('scroll', this.handleScroll)
  }

  removeListener() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    )

    const { innerHeight, pageYOffset } = window
    const offset = (pageYOffset / docHeight) * innerHeight
    const scrollPosition = pageYOffset + offset

    const value =
      (scrollPosition <= 0 ? 0 : scrollPosition / innerHeight) /
      (docHeight / innerHeight)

    const percentage = value > 1 ? 100 : value * 100

    this.setState({
      docHeight,
      percentage,
      pageYOffset,
      scrollPosition
    })
  }

  render() {
    // <TestGrid vertical />
    return (
      <main className={classnames(styles.main, grid.container)}>

        <Home screenProps={this.state} />
      </main>
    )
  }
}

export default App
