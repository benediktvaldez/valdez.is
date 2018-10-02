import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Image.module.scss'

const images = {
  chair:
    'https://images.ctfassets.net/4oeboeik7h0d/3uhjG0tjJCCo0OWmsauo4Q/717c9fe39b0d719a57b139bf4f66f6a4/dillon-mangum-383677-unsplash.jpg?fm=jpg&q=50&fl=progressive',
  windows:
    'https://images.ctfassets.net/4oeboeik7h0d/332alceyikiSkYcMq48IsG/1a008452029baa5f320bc81149ace420/siarhei-plashchynski-363247-unsplash.jpg?fm=jpg&q=50&fl=progressive',
  fire:
    'https://images.ctfassets.net/4oeboeik7h0d/5mRSvTA4daGamK8cwEC468/e6f8891cf766a68830ce1a754b3470ca/chuttersnap-120736-unsplash.jpg?fm=jpg&q=50&fl=progressive',
  lighter:
    'https://images.ctfassets.net/4oeboeik7h0d/646BJse86co0eiMuAogS2A/acb884ea8e1bff9ee9cdd16cc10ae455/marek-szturc-450829-unsplash.jpg?fm=jpg&q=50&fl=progressive',
  pencil:
    'https://images.ctfassets.net/4oeboeik7h0d/5kRtvMCSC4WgC0eGWGsew4/d62c5e2f5253866fc6ae94ec995df47c/neven-krcmarek-219447-unsplash.jpg?fm=jpg&q=50&fl=progressive',
  torch:
    'https://images.ctfassets.net/4oeboeik7h0d/1eiTDB4jsEoCo8YUeEkSaE/8f7c67f9f1d1d16e255687219bb87eca/javier-garcia-648626-unsplash.jpg?fm=jpg&q=50&fl=progressive'
}

class Image extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      imageStatus: 'loading',
      timedOut: props.delay <= 0 ? true : false
    }
  }

  componentDidMount() {
    if (this.props.delay > 0) {
      this.timeout = setTimeout(() => {
        this.setState({ timedOut: true })
      }, this.props.delay)
    }
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' })
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed' })
  }

  render() {
    const { image } = this.props
    const { imageStatus, timedOut } = this.state

    return (
      <div
        className={classnames(
          styles.Image,
          imageStatus === 'loaded' && timedOut ? styles.loaded : styles.loading
        )}
        style={{ backgroundImage: `url(${images[image]})` }}
      >
        <img
          hidden
          alt={image || ''}
          src={images[image]}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
      </div>
    )
  }
}

Image.propTypes = {
  image: PropTypes.oneOf(Object.keys(images)),
  delay: PropTypes.number
}

Image.defaultProps = {
  image: 'chair',
  delay: 0
}

export default Image
