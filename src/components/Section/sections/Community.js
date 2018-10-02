import React from 'react'
import classnames from 'classnames'

import grid from 'styles/grid.module.scss'

export default ({ children }) => {
  return (
    <div className={classnames(grid.col, grid['align-self-center'])}>
      <h3>Community</h3>
      {children}
    </div>
  )
}
