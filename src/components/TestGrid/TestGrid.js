import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import grid from 'styles/grid.module.scss'
import styles from './TestGrid.module.scss'

const TestGrid = ({ vertical, horizontal, ...props }) => {
  return process.env.NODE_ENV === 'development' ? (
    <div
      className={classnames(
        styles.wrap,
        grid.row,
        horizontal ? styles.horizontal : '',
        vertical ? styles.vertical : ''
      )}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
        <div
          key={i}
          data-key={i}
          className={classnames(
            grid['col-sm-1'],
            grid['col-md-1'],
            grid['col-lg-1'],
            grid['col-xl-1']
          )}
        />
      ))}
    </div>
  ) : null
}

TestGrid.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool
}

TestGrid.defaultProps = {
  vertical: false,
  horizontal: false
}

export default TestGrid
