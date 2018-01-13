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
      <Section screenProps={screenProps} type="Introduction" />
      <Section screenProps={screenProps} type="Community" />
      <Section screenProps={screenProps} type="Career" />
      <Section screenProps={screenProps} type="Experience" />
      <Section screenProps={screenProps} type="Projects" />
      <Footer screenProps={screenProps} />
    </div>
  ]
}

export default withJob({
  work: () => api.getEntries({ content_type: 'viewHome' })
})(Home)
