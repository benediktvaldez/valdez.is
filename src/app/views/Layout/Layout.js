import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import throttle from 'lodash.throttle'

import Home from 'app/routes/Home'
import TestGrid from 'app/components/TestGrid'

import './Layout.scss'
class Layout extends Component {
  propTypes: {
    disabled: PropTypes.bool,
    throttle: PropTypes.number.isRequired
  }

  defaultProps: {
    disabled: false,
    throttle: 150
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

  componentWillUpdate({ disabled }) {
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
    const offset = pageYOffset / docHeight * innerHeight
    const scrollPosition = pageYOffset + offset

    const value =
      (scrollPosition === 0 ? 0 : scrollPosition / innerHeight) /
      (docHeight / innerHeight)

    const percentage = value > 1 ? 100 : value * 100

    this.setState({
      docHeight,
      pageYOffset,
      scrollPosition,
      backgroundPosition: `${percentage}% ${percentage}%`
    })
  }

  render() {
    const {
      docHeight,
      pageYOffset,
      scrollPosition,
      backgroundPosition
    } = this.state
    return (
      <main className="container" style={{ backgroundPosition }}>
        <Helmet titleTemplate="%s | valdez.is">
          <title>valdez.is</title>
        </Helmet>

        <TestGrid vertical />
        <Home
          screenProps={{
            docHeight,
            pageYOffset,
            scrollPosition
          }}
        />
      </main>
    )
  }
}

export default Layout
