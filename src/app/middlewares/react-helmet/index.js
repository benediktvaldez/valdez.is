import Helmet from 'react-helmet'

const helmet = () => session => {
  session.on('server', render => {
    render()
    const data = Helmet.renderStatic()
    session.helmet = data
    Object.assign(session.document.htmlProps, data.htmlAttributes.toComponent())
    Object.assign(session.document.bodyProps, data.bodyAttributes.toComponent())
    session.document.head.push(
      ...data.title.toComponent(),
      ...data.meta.toComponent(),
      ...data.link.toComponent(),
      ...data.style.toComponent(),
      ...data.noscript.toComponent(),
      ...data.script.toComponent()
    )
  })
}

export default helmet
