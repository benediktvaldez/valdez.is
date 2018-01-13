import React from 'react'

import * as sections from './sections'
import './Section.scss'

const Section = ({ type, children, ...props }) => {
  let sectionEl = null

  if (sections && sections[type]) {
    sectionEl = sections[type]
  }

  return (
    <section>
      {React.createElement(
        sectionEl || 'p',
        props,
        sectionEl ? children : `No section with type ${type}`
      )}
    </section>
  )
}

export default Section
