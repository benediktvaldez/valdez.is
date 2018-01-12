import React from 'react'
import Helmet from 'react-helmet'
import { withJob } from 'react-jobs'

import api from 'app/api'

const Home = ({ jobResult: data }) => {
  const content = data.items[0]
  return [
    <Helmet key="helmet">
      <title>{content.fields.title}</title>
    </Helmet>,
    <div key="Home">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <p>Edit app.js to get started</p>
        </div>
      </div>
    </div>
  ]
}

export default withJob({
  work: () => api.getEntries({ content_type: 'viewHome' })
})(Home)
