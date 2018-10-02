import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Icon from 'components/Icon'

import styles from './Contact.module.scss'

const Contact = ({ red, dark, active, children, ...props }) => {
  // prettier-ignore
  return (
    <div
      className={classnames(styles.contact, active ? 'active' : '')}
      {...props}
    >
      <Icon red={red} dark={dark} href="mailto:hi@valdez.is" icon="email" />
      <Icon red={red} dark={dark} href="tel:+3548430634" icon="phone" />
      <Icon red={red} dark={dark} href="https://m.me/benediktvaldez" icon="facebook" />
      <Icon red={red} dark={dark} href="https://github.com/benediktvaldez" icon="github" />
      <Icon red={red} dark={dark}
        href="https://www.linkedin.com/in/benediktvaldez/"
        icon="linkedin"
      />
      <Icon red={red} dark={dark} href="https://twitter.com/benediktvaldez" icon="twitter" />
      <Icon red={red} dark={dark} href="https://snapchat.com/add/benediktvaldez" icon="snapchat" />
      <Icon red={red} dark={dark} href="https://instagram.com/benediktvaldez" icon="instagram" />
      <Icon red={red} dark={dark} href="https://medium.com/@benediktvaldez" icon="medium" />
      {/* <Icon red={red} dark={dark} href="https://stackoverflow.com/users/1000085/benedikt-d-valdez?tab=profile" icon="stackoverflow" /> */}
      {/* <Icon red={red} dark={dark} href="https://dribbble.com/benediktvaldez" icon="dribbble" /> */}
      {children}
    </div>
  )
}

Contact.propTypes = {
  red: PropTypes.bool,
  dark: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.node
}

Contact.defaultProps = {
  red: false,
  dark: false,
  active: false,
  children: null
}

export default Contact
