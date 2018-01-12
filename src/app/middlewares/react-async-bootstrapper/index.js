import asyncBootstrapper from 'react-async-bootstrapper'

const bootstrapper = () => () => {
  let firstRender = true

  return async next => {
    const app = await next()
    if (firstRender) {
      firstRender = false
      await asyncBootstrapper(app)
    }

    return app
  }
}

export default bootstrapper
