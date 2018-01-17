import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { colors } from 'app/styles'

import './Avatar.scss'

// prettier-ignore
const images = {
  gray: 'https://images.contentful.com/4oeboeik7h0d/4u6LDPiEq4CoiyiOosykic/c0bac040a844cb8c5fd609eefef85c16/FullBodyImage-gray.png',
  blue: 'https://images.contentful.com/4oeboeik7h0d/30sOaivLtKQQ6Kus0C4Ew2/3c9468a431a6382d971103ec1da701a2/FullBodyImage-blue.png',
  red: 'https://images.contentful.com/4oeboeik7h0d/2T8vFlu7HOGqee6Ceq4kAa/5c25eb888b4a4988f53aee9f9862c22d/FullBodyImage-red.png',
}

const Avatar = ({ circle, image, imageTransform, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 910 1060"
    className={cn('Avatar', className)}
    {...props}
  >
    <defs>
      <path
        className="Avatar--mask"
        id="avatar-mask-path"
        d="M455 1060c251.2896 0 455-203.7104 455-455S661.2896 0 410 0 0 353.7104 0 605s203.7104 455 455 455z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle
        className="Avatar--circle"
        cx="455"
        cy="605"
        r="455"
        fill={colors[circle]}
      />
      <mask id="avatar-mask" fill="#fff">
        <use xlinkHref="#avatar-mask-path" />
      </mask>
      <g mask="url(#avatar-mask)">
        <image
          className="Avatar--image"
          width="1221"
          height="2002"
          style={{
            transform: imageTransform,
          }}
          xlinkHref={images[image]}
        />
      </g>
    </g>
  </svg>
)

const colorsArray = []
Object.keys(colors).map(color => {
  colorsArray.push(color)
})

Avatar.propTypes = {
  circle: PropTypes.oneOf(colorsArray).isRequired,
  image: PropTypes.oneOf(['blue', 'red', 'gray']).isRequired,
  imageTransform: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Avatar.defaultProps = {
  circle: 'blue',
  image: 'gray',
  imageTransform: 'translate(-213 -357)',
  className: '',
}

export default Avatar
