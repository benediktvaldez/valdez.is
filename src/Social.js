import React, { Component } from 'react'
import cx from 'classnames'
import './Social.css'

class App extends Component {
  render() {
    return (
      <div className={cx(['Social', 'light'])}>
        <h3>
          You can find me online as <b>@benediktvaldez</b>
        </h3>
      </div>
    )
  }
}

export default App
