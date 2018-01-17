import React from 'react'

import Gradient from 'app/components/Gradient'
import Contact from 'app/components/Contact'

import './Footer.scss'

const Footer = ({ children }) => {
  return (
    <footer className="row align-items-center">
      <div className="col">
        <h1>reach out</h1>
      </div>
      <Contact />
      <Gradient offset={-20} height={120} colors={['red', 'dark']} />
    </footer>
  )
}

export default Footer
