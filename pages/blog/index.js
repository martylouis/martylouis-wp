import React from 'react'
import Helmet from "react-helmet"
import { config } from 'config'
import Header from '../../components/header'
import PostList from '../../components/PostList'

class BlogIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={`Blog | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Header />
        <h1>
          This is Blog index!
        </h1>
        <PostList postRoute={this.props.route} postDir='blog' />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
}

export default BlogIndex
