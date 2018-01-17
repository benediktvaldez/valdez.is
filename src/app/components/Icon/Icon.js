import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { colors } from 'app/styles'

import dribbble from './icon/dribbble'
import email from './icon/email'
import facebook from './icon/facebook'
import github from './icon/github'
import instagram from './icon/instagram'
import linkedin from './icon/linkedin'
import medium from './icon/medium'
import phone from './icon/phone'
import snapchat from './icon/snapchat'
import stackoverflow from './icon/stackoverflow'
import twitter from './icon/twitter'

import './Icon.scss'

const icons = {
  dribbble,
  email,
  facebook,
  github,
  instagram,
  linkedin,
  medium,
  phone,
  snapchat,
  stackoverflow,
  twitter,
}

const Icon = ({ icon, href, className, ...props }) => {
  const Comp = icons[icon]

  return href ? (
    <a className="Icon" href={href} target="_blank" rel="noopener noreferrer">
      <Comp
        className={cn('Icon--svg', `Icon--svg__${icon}`, className)}
        {...props}
      />
    </a>
  ) : (
    <div className="Icon">
      <Comp
        className={cn('Icon--svg', `Icon--svg__${icon}`, className)}
        {...props}
      />
    </div>
  )
}

const colorsArray = []
Object.keys(colors).map(color => {
  colorsArray.push(color)
})

Icon.propTypes = {
  icon: PropTypes.oneOf([
    'dribbble',
    'email',
    'facebook',
    'github',
    'instagram',
    'linkedin',
    'medium',
    'phone',
    'snapchat',
    'stackoverflow',
    'twitter',
  ]).isRequired,
  color: PropTypes.oneOf(colorsArray).isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  icon: 'email',
  color: 'light',
  href: '',
  className: '',
}

export default Icon
