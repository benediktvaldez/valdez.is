import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { colors as c } from 'app/styles'

import './Gradient.scss'

const Gradient = ({ offset, height, colors }) => {
  return (
    <div
      className="gradient-background"
      style={{
        top: `${offset}vh`,
        height: `${height}vh`,
        backgroundImage: `linear-gradient(0deg,${colors
          .map(co => c[co] || co)
          .join(',')})`
      }}
    />
  )
}

const colorsArray = []
Object.keys(c).map(color => {
  colorsArray.push(color)
})

Gradient.propTypes = {
  offset: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.oneOf(colorsArray))
}

Gradient.defaultProps = {
  offset: 0,
  height: 200,
  colors: ['dark', 'dark', 'red']
}

export default Gradient
