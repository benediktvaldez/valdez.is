import React from 'react'
import Helmet from 'react-helmet'
import { withJob } from 'react-jobs'

import api from 'app/api'
import Footer from 'app/components/Footer'
import Header from 'app/components/Header'
import Section from 'app/components/Section'

const Home = ({ jobResult: data }) => {
  const content = data.items[0]
  return [
    <Helmet key="helmet">
      <title>{content.fields.title}</title>
    </Helmet>,
    <div key="Home">
      <Header />
      <Section type="Introduction" />
      <Section type="Community" />
      <Section type="Career" />
      <Section type="Experience" />
      <Section type="Projects" />
      <Footer />
    </div>
  ]
}

export default withJob({
  work: () => api.getEntries({ content_type: 'viewHome' })
})(Home)
