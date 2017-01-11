import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import PostList from '../../components/PostList'

class PostIndex extends React.Component {
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
        <h1>
          This is Blog index!
        </h1>
        <PostList postRoute={this.props.route} postDir='blog' />
      </div>
    )
  }
}

export default PostIndex
