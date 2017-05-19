import React, { Component } from 'react'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="Footer light">
        <h3>
          Also; a developer at
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://kolibri.is"
          >
            Kolibri
          </a>
          , where I make excellent UI/UX with
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://labs.icelandair.com/"
          >
            Icelandair Digital Labs
          </a>
          , a curator of
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://jsconf.is">
            JSConf Iceland
          </a>
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

export default Footer
