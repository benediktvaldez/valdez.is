import React from 'react'
import classnames from 'classnames'

import Gradient from 'components/Gradient'
import Contact from 'components/Contact'
import Image from 'components/Image'

import grid from 'styles/grid.module.scss'
import styles from './Footer.module.scss'

const Footer = ({ children }) => {
  return (
    <footer
      className={classnames(
        styles.footer,
        grid.row,
        grid['align-items-center']
      )}
    >
      <div className={grid.col}>
        <h1>reach out</h1>
      </div>
      <Contact red={true} active={true} />
      <Image image="lighter" />
      <Gradient
        offset={0}
        height={100}
        colors={['transparent', 'transparent', 'dark']}
      />
    </footer>
  )
}

export default Footer
