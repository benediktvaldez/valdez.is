import React, { Component } from 'react'
import cn from 'classnames'

import { colors } from 'app/styles'
import Gradient from 'app/components/Gradient'
import ScrollIndicator from 'app/components/ScrollIndicator'

import { animateScroll } from 'react-scroll'

import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      hide: false
    }

    this.timeout = 0

    this.scrollToNext = this.scrollToNext.bind(this)
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        show: true
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.timeout)
    if (
      this.state.show === true &&
      this.state.hide !== true &&
      nextProps.screenProps.pageYOffset > 150
    ) {
      this.setState({
        hide: true
      })
    } else {
      this.setState({
        show: true
      })
    }
  }

  scrollToNext() {
    animateScroll.scrollTo(window.innerHeight * 0.75, {
      duration: 2000,
      delay: 200,
      smooth: 'easeOutQuint'
    })
  }

  render() {
    const { children } = this.props
    const { show, hide } = this.state
    return (
      <header className="row align-items-center">
        <div className="col">
          <h1>hi.</h1>
        </div>

        <ScrollIndicator
          onClick={this.scrollToNext}
          className={cn(show ? 'in' : '', hide ? 'out' : '')}
        />
        <Gradient height={120} colors={['dark', 'red']} />
      </header>
    )
  }
}

export default Header
