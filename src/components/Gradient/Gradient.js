import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { colors as c } from 'styles'

import styles from './Gradient.module.scss'

const Gradient = ({ offset, height, colors }) => {
  return (
    <div
      className={classnames(styles['gradient-background'])}
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

const colorsArray = ['transparent']
Object.keys(c).map(color => {
  colorsArray.push(color)
  return color
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
