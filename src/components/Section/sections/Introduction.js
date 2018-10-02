import React, { Component } from 'react'
import classnames from 'classnames'

import Avatar from 'components/Avatar'

import styles from './Introduction.module.scss'
import grid from 'styles/grid.module.scss'
import type from 'styles/type.module.scss'

class Introduction extends Component {
  render() {
    const { rect } = this.props
    const value = -1 + rect.top / rect.height || 0
    const per = value < -1 ? -1 : value

    const active = rect.top < rect.height * 0.5

    return [
      <div
        key="content"
        className={classnames(
          styles.content,
          styles.introduction,
          grid['col-12'],
          grid['col-md-9'],
          grid['offset-md-1'],
          active ? styles.active : styles.inactive
        )}
      >
        <p className={classnames(styles.intro, styles.large, type.large)}>
          <span>I'm Benedikt Daníel Valdez Stefánsson; father, husband, creator, developer, musician, photographer.</span>
        </p>
      </div>,
      <Avatar
        key="avatar"
        circle="blue"
        image="gray"
        className="Avatar--introduction"
        active={active}
        imageTransform={`translate3d(-${213}px, ${357 * per}px, 0)`}
      />
    ]
  }
}

export default Introduction
