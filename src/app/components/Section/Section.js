import React, { Component } from 'react'

import * as sections from './sections'
import './Section.scss'

class Section extends Component {
  shouldComponentUpdate(nextProps) {
    this.rect = this.section.getBoundingClientRect()
    return (
      this.rect.top < this.rect.height * 1 &&
      this.rect.bottom > this.rect.height * 0.25
    )
  }

  render() {
    this.rect = this.section ? this.section.getBoundingClientRect() : {}
    const { type, children, ...props } = this.props
    let sectionEl = null

    if (sections && sections[type]) {
      sectionEl = sections[type]
    }

    return (
      <section
        className="row"
        ref={section => {
          this.section = section
        }}
      >
        {React.createElement(
          sectionEl || 'p',
          sectionEl ? { type, rect: this.rect, ...props } : {},
          sectionEl ? children : `No section with type ${type}`
        )}
      </section>
    )
  }
}

export default Section
