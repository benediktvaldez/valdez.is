import { Component, DOM } from 'react'

class Typewriter extends Component {
  componentWillMount() {
    let { children: text } = this.props

    if (Array.isArray(text)) {
      this._originalString = text.reverse().pop()
    } else {
      this._originalString = text
    }

    this._originalString = this._originalString.split('').reverse()
    this.setState({ text: ' ' })
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
    let { speed, randomSpeed, children: text } = this.props

    speed = randomSpeed ? this.randomizeSpeed(speed) : speed

    setTimeout(() => {
      this.setState({
        text: this.state.text + char,
      })

      if (this._originalString.length) {
        this.type(this._originalString.pop())
      } else {
        this.handleDone()
        if (Array.isArray(text) && text.length) {
          this._originalString = text.pop().split('').reverse()

          setTimeout(() => {
            this.setState({ text: '' })
            this.type(this._originalString.pop())
          }, 1000)
        }
      }
    }, speed)
  }

  randomizeSpeed(baseline = 50) {
    return Math.floor(Math.random() * (baseline - 220) + 220)
  }

  render() {
    return DOM[this.props.tag](null, this.state.text)
  }
}

Typewriter.defaultProps = {
  delay: 0,
  speed: 75,
  randomSpeed: false,
  tag: 'p',
  done: () => {},
}

export default Typewriter
