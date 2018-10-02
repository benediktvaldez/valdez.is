import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { colors } from 'styles'

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

import styles from './Icon.module.scss'

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
  twitter
}

const Icon = ({ red, dark, icon, href, className, ...props }) => {
  const Comp = icons[icon]

  const SVGclassnames = classnames(
    styles['Icon--svg'],
    styles[`Icon--svg__${icon}`],
    styles[className],
    red ? styles.red : '',
    dark ? styles.dark : ''
  )

  return href ? (
    <a
      className={classnames(
        styles.Icon,
        red ? styles.red : '',
        dark ? styles.dark : ''
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Comp className={SVGclassnames} {...props} />
    </a>
  ) : (
    <div
      className={classnames(
        styles.Icon,
        red ? styles.red : '',
        dark ? styles.dark : ''
      )}
    >
      <Comp className={SVGclassnames} {...props} />
    </div>
  )
}

const colorsArray = []
Object.keys(colors).map(color => {
  colorsArray.push(color)
  return color
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
    'twitter'
  ]).isRequired,
  color: PropTypes.oneOf(colorsArray).isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  red: PropTypes.bool,
  dark: PropTypes.bool
}

Icon.defaultProps = {
  icon: 'email',
  color: 'light',
  href: '',
  className: '',
  red: false,
  dark: false
}

export default Icon
