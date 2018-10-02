import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Typewriter extends PureComponent {
  UNSAFE_componentWillMount() {
    const { children: text } = this.props

    if (Array.isArray(text)) {
      this._originalString = text.reverse().pop()
    } else {
      this._originalString = text
    }

    this._originalString = this._originalString.split('').reverse()
    this.setState({ text: '' })
  }

  componentDidMount() {
    const { delay } = this.props
    if (delay > 0) {
      setTimeout(() => this.type(this._originalString.pop()), delay)
    } else {
      this.type(this._originalString.pop())
    }
  }

  handleDone() {
    this.props.done()
  }

  type(char) {
    const { randomSpeed, children: text } = this.props

    const speed = randomSpeed
      ? this.randomizeSpeed(this.props.speed)
      : this.props.speed
    const lastChar = this._originalString.length === 0

    setTimeout(() => {
      this.setState({
        text: this.state.text + char
      })
      if (this._originalString.length) {
        this.type(this._originalString.pop())
      } else {
        this.handleDone()
        if (Array.isArray(text) && text.length) {
          this._originalString = text
            .pop()
            .split('')
            .reverse()

          setTimeout(() => {
            this.setState({ text: '' })
            this.type(this._originalString.pop())
          }, 1000)
        }
      }
    }, lastChar ? speed * 4 : speed)
  }

  randomizeSpeed(baseline = 50) {
    return Math.floor(Math.random() * (baseline - 220) + 220)
  }

  render() {
    return <span className={this.props.className}>{this.state.text}</span>
  }
}

Typewriter.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  randomSpeed: PropTypes.bool,
  done: PropTypes.func.isRequired
}

Typewriter.defaultProps = {
  className: '',
  children: '',
  delay: 0,
  speed: 75,
  randomSpeed: false,
  done: () => {}
}

export default Typewriter
