import React from 'react'
import PropTypes from 'prop-types'

import './TestGrid.scss'

const TestGrid = ({ vertical, horizontal, ...props }) => {
  return process.env.NODE_ENV === 'development' ? (
    <div
      className={`test-grid-wrap row ${horizontal && 'horizontal'} ${vertical &&
        'vertical'}`}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
        <div key={i} data-key={i} className="col-sm-1 col-md-1 col-lg-1 col-xl-1" />
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
