import React from 'react'

class PostTemplate extends React.Component {
  render() {

    const {route} = this.props
    const post = route.page.data

    return (
      <div className="post-template">
        <h1>{ post.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}

PostTemplate.propTypes = {
  route: React.PropTypes.object.isRequired
}

export default PostTemplate
