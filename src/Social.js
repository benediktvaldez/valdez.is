import React, { Component } from 'react'
import cx from 'classnames'
import './Social.css'

class App extends Component {
  render() {
    return (
      <div className={cx(['Social', 'light'])}>
        <h3>
          Also; a developer at
          {' '}
          <a target="_blank" href="https://kolibri.is">Kolibri</a>
          , where I make excellent UI/UX with
          {' '}
          <a target="_blank" href="https://labs.icelandair.com/">
            Icelandair Digital Labs
          </a>
          , a curator of
          {' '}
          <a target="_blank" href="https://jsconf.is">JSConf Iceland</a>
          {' '}
          and a board member of SVEF
          {' '}
          <small>(The Icelandic Web Industry Association)</small>
        </h3>
        <h4>
          You can find me online as <b>@benediktvaldez</b>
        </h4>
      </div>
    )
  }
}

export default App
