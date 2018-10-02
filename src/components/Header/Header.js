import React, { PureComponent } from 'react'
import classnames from 'classnames'

import Gradient from 'components/Gradient'
import Image from 'components/Image'
import Contact from 'components/Contact'
import ScrollIndicator from 'components/ScrollIndicator'
import Typewriter from 'components/Typewriter'

import { animateScroll } from 'react-scroll'

import grid from 'styles/grid.module.scss'
import styles from './Header.module.scss'

class Header extends PureComponent {
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

  UNSAFE_componentWillReceiveProps(nextProps) {
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
    if (this.state.hide !== true) {
      animateScroll.scrollTo(window.innerHeight * 0.75, {
        duration: 2000,
        delay: 200,
        smooth: 'easeOutQuint'
      })
    }
  }

  render() {
    const { show, hide } = this.state
    return (
      <header
        className={classnames(
          styles.header,
          grid.row,
          grid['align-items-center']
        )}
      >
        <div className={classnames('content', grid.col)}>
          <h1>
            <Typewriter delay={500} speed={200}>
              hi.
            </Typewriter>
          </h1>
        </div>

        <ScrollIndicator
          onClick={this.scrollToNext}
          color="red"
          show={show}
          hide={hide}
        />
        <Contact dark={true} active={show} />
        <Image delay={3000} image="chair" />
        <Gradient offset={0} height={100} colors={['dark', 'transparent']} />
      </header>
    )
  }
}

export default Header
