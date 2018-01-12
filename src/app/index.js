import React from 'react'
import { createApp } from 'tux'

import 'app/styles/global.scss'

import bootstrapper from 'app/middlewares/react-async-bootstrapper'
import asyncComponent from 'app/middlewares/react-async-component'
import jobs from 'app/middlewares/react-jobs'
import helmet from 'app/middlewares/react-helmet'

import Layout from 'app/views/Layout'

export default createApp()
  .use(bootstrapper())
  .use(asyncComponent())
  .use(jobs())
  .use(helmet())
  .use(<Layout />)
