import React from 'react'

class PageTemplate extends React.Component {
  render() {

    const {route} = this.props
    const page = route.page.data

    return (
      <div className="page-template">
        <h1>{ page.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    )
  }
}

PageTemplate.propTypes = {
  route: React.PropTypes.object.isRequired
}

export default PageTemplate
