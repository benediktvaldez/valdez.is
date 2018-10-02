import React from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Section from 'components/Section'

const Home = ({ screenProps }) => {
  return (
    <div>
      <Header screenProps={screenProps} />
      <Section screenProps={screenProps} section="Introduction" />
      <Section screenProps={screenProps} section="Community" />
      <Section screenProps={screenProps} section="OpenSource" />
      <Section screenProps={screenProps} section="Career" />
      <Section screenProps={screenProps} section="Experience" />
      <Section screenProps={screenProps} section="Projects" />
      <Footer screenProps={screenProps} />
    </div>
  )
}

export default Home
