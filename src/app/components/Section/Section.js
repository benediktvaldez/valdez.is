import React from 'react'

import * as sections from './sections'
import './Section.scss'

const Section = ({ type, children }) => {
  let sectionEl = null

  if (sections.hasOwnProperty(type)) {
    sectionEl = sections[type]
  }

  return (
    <section>
      {React.createElement(
        sectionEl || 'p',
        {},
        sectionEl ? children : `No section with type ${type}`
      )}
    </section>
  )
}

export default Section
