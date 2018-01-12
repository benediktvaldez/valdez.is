import React from 'react'
import {
  AsyncComponentProvider,
  createAsyncContext,
} from 'react-async-component'

const async = () => session => {
  const asyncContext = createAsyncContext()
  const rehydrateState =
    typeof window === 'undefined'
      ? undefined
      : window.REACT_ASYNC_COMPONENT_STATE

  session.on('server', next => {
    next()
    session.document.window.REACT_ASYNC_COMPONENT_STATE = asyncContext.getState()
  })

  return async next => {
    const children = await next()
    return (
      <AsyncComponentProvider
        asyncContext={asyncContext}
        rehydrateState={rehydrateState}
      >
        {children}
      </AsyncComponentProvider>
    )
  }
}

export default async
