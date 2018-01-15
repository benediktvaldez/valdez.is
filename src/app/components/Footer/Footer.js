import React from 'react'

import Gradient from 'app/components/Gradient'

const Footer = ({ children }) => {
  return (
    <footer>
      <h1>bye.</h1>
      <Gradient offset={-20} height={120} colors={['red', 'dark']} />
    </footer>
  )
}

export default Footer
