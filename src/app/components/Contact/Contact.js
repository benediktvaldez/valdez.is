import React from 'react'
import cn from 'classnames'

import Icon from 'app/components/Icon'

import './Contact.scss'

export default ({ children, className, ...props }) => {
  // prettier-ignore
  return (
    <div className={cn('Contact', className)} {...props}>
      <Icon href="mailto:hi@valdez.is" icon="email" />
      <Icon href="tel:8430634" icon="phone" />
      <Icon href="https://m.me/benediktvaldez" icon="facebook" />
      <Icon href="https://github.com/benediktvaldez" icon="github" />
      <Icon href="https://www.linkedin.com/in/benediktvaldez/" icon="linkedin" />
      <Icon href="https://twitter.com/benediktvaldez" icon="twitter" />
      <Icon href="https://snapchat.com/add/benediktvaldez" icon="snapchat" />
      <Icon href="https://instagram.com/benediktvaldez" icon="instagram" />
      <Icon href="https://medium.com/@benediktvaldez" icon="medium" />
      {/* <Icon href="https://stackoverflow.com/users/1000085/benedikt-d-valdez?tab=profile" icon="stackoverflow" /> */}
      {/* <Icon href="https://dribbble.com/benediktvaldez" icon="dribbble" /> */}
      {children}
    </div>
  )
}
