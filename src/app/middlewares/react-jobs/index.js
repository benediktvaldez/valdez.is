import React from 'react'
import { JobProvider, createJobContext } from 'react-jobs'

const async = () => session => {
  const jobContext = createJobContext()
  const rehydrateState =
    typeof window === 'undefined' ? undefined : window.REACT_JOBS_STATE

  session.on('server', next => {
    next()
    session.document.window.REACT_JOBS_STATE = jobContext.getState()
  })

  return async next => {
    const children = await next()
    return (
      <JobProvider jobContext={jobContext} rehydrateState={rehydrateState}>
        {children}
      </JobProvider>
    )
  }
}

export default async
