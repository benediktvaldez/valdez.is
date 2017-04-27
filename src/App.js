import React, { Component } from 'react'
import './App.css'

import Hero from './Hero'
import Social from './Social'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Social />
      </div>
    )
  }
}

export default App
