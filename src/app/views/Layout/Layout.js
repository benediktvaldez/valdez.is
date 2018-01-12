import React from 'react'
import Helmet from 'react-helmet'

import Home from 'app/routes/Home'
import TestGrid from 'app/components/TestGrid'

const Layout = ({ children }) => {
  return (
    <main className="container">
      <Helmet titleTemplate="%s | valdez.is">
        <title>valdez.is</title>
      </Helmet>

      <TestGrid vertical />
      <Home />
    </main>
  )
}

export default Layout
