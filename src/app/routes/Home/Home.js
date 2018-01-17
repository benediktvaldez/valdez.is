import React from 'react'
import Helmet from 'react-helmet'
import { withJob } from 'react-jobs'

import api from 'app/api'
import Footer from 'app/components/Footer'
import Header from 'app/components/Header'
import Section from 'app/components/Section'

const Home = ({ screenProps, jobResult: data }) => {
  const content = data.items[0]
  return [
    <Helmet key="helmet">
      <title>{content.fields.title}</title>
    </Helmet>,
    <div key="Home">
      <Header screenProps={screenProps} />
      <Section screenProps={screenProps} section="Introduction" />
      <Section screenProps={screenProps} section="Community" />
      <Section screenProps={screenProps} section="Career" />
      <Section screenProps={screenProps} section="Experience" />
      <Section screenProps={screenProps} section="Projects" />
      <Footer screenProps={screenProps} />
    </div>,
  ]
}

export default withJob({
  work: () => api.getEntries({ content_type: 'viewHome' }),
})(Home)
