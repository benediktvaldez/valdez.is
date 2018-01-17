import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { colors } from 'app/styles'

import './ScrollIndicator.scss'

const ScrollIndicator = ({ className, color, ...props }) => (
  <svg
    className={cn('ScrollIndicator', className)}
    {...props}
    viewBox="0 0 79 79"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path
        className="arrow arrow-2"
        fill={colors[color]}
        d="M49.4375 39.203l-10 9.1408-10-9.1407c-.4167-.4165-.8984-.625-1.4453-.625-.547 0-1.0287.2085-1.4453.625-.4168.3647-.625.8204-.625 1.3673 0 .547.2082 1.0287.625 1.4453l11.4842 11.25c.3646.3646.8334.547 1.4063.547.573 0 1.0417-.1824 1.4063-.547l11.4843-11.25c.4168-.4166.625-.8984.625-1.4453 0-.547-.2082-1.0026-.625-1.3672-.4165-.4165-.8983-.625-1.4452-.625-.547 0-1.0286.2085-1.4453.625z"
      />
      <path
        className="arrow arrow-1"
        fill={colors[color]}
        d="M49.4375 29.203l-10 9.1408-10-9.1407c-.4167-.4165-.8984-.625-1.4453-.625-.547 0-1.0287.2085-1.4453.625-.4168.3647-.625.8204-.625 1.3673 0 .547.2082 1.0287.625 1.4453l11.4842 11.25c.3646.3646.8334.547 1.4063.547.573 0 1.0417-.1824 1.4063-.547l11.4843-11.25c.4168-.4166.625-.8984.625-1.4453 0-.547-.2082-1.0026-.625-1.3672-.4165-.4165-.8983-.625-1.4452-.625-.547 0-1.0286.2085-1.4453.625z"
      />
      <path
        className="circle"
        stroke={colors[color]}
        strokeWidth="4.3664"
        d="M39.5 76c-5.06 0-9.793-.9523-14.1992-2.857-4.4062-1.9045-8.2722-4.5055-11.598-7.803-3.326-3.2976-5.9413-7.1636-7.846-11.5982C3.9524 49.3072 3 44.56 3 39.5c0-5.003.9523-9.722 2.857-14.1565 1.9045-4.4346 4.5197-8.3006 7.8457-11.5982 3.326-3.2975 7.192-5.9127 11.598-7.8458C29.707 3.9665 34.44 3 39.5 3c5.06 0 9.793.9665 14.1992 2.8995 4.4062 1.933 8.258 4.5483 11.5555 7.8458 3.2975 3.2976 5.9127 7.1636 7.8458 11.5982C75.0335 29.778 76 34.497 76 39.5c0 5.06-.9665 9.8072-2.8995 14.2418-1.933 4.4346-4.5483 8.3006-7.8458 11.5982-3.2976 3.2975-7.1493 5.8985-11.5555 7.803C49.293 75.0478 44.56 76 39.5 76z"
      />
    </g>
  </svg>
)

const colorsArray = []
Object.keys(colors).map(color => {
  colorsArray.push(color)
})

ScrollIndicator.propTypes = {
  color: PropTypes.oneOf(colorsArray).isRequired,
  className: PropTypes.string
}

ScrollIndicator.defaultProps = {
  color: 'light',
  className: ''
}
export default ScrollIndicator
