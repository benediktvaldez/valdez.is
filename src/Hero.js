import React, { Component } from 'react'
import cx from 'classnames'
import './Hero.css'

import Typewriter from './Typewriter'

class Hero extends Component {
  constructor() {
    super()
    this.state = {
      color: 'red',
      h1: false,
      h2: false,
    }
  }

  render() {
    return (
      <div
        className={cx([
          'Hero',
          this.state.h1 && this.state.h2 ? '' : 'loading',
        ])}
      >
        <h1>
          <Typewriter
            delay={1000}
            speed={200}
            tag="span"
            done={() => this.setState({ h1: true })}
          >
            hi.
          </Typewriter>
        </h1>
        <h2>
          {this.state.h1 &&
            <Typewriter
              delay={1000}
              speed={70}
              tag="span"
              done={() => this.setState({ h2: true })}
            >
              {
                "I'm benedikt daníel valdez stefánsson; father, husband, creator, developer, musician, photographer"
              }
            </Typewriter>}
        </h2>
      </div>
    )
  }
}

export default Hero
