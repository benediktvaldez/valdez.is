import React, { Component } from 'react'

import Avatar from 'app/components/Avatar'

import './Introduction.scss'

class Introduction extends Component {
  render() {
    const { rect, content, ...props } = this.props
    const value = -1 + rect.top / rect.height || 0
    const per = value < -1 ? -1 : value

    const active = rect.top < rect.height * 0.5

    return [
      <div
        key="content"
        className={`content introduction col-12 col-md-9 offset-md-1 ${
          active ? 'active' : 'inactive'
        }`}
      >
        <p className="large">{content}</p>
      </div>,
      <Avatar
        key="avatar"
        circle="blue"
        image="blue"
        className={`Avatar--introduction ${active ? 'active' : 'inactive'}`}
        imageTransform={`translate3d(-${213}px, ${357 * per}px, 0)`}
      />,
    ]
  }
}

export default Introduction
