import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import PostList from '../../components/PostList'
// import sortBy from 'lodash/sortBy'
// import access from 'safe-access'
// import include from 'underscore.string/include'

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
          Project Index!
        </h1>
        <PostList postRoute={this.props.route} postDir='projects' />
      </div>
    )
  }
}

export default PostIndex
