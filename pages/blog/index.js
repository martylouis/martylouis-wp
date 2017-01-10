import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'

class PostIndex extends React.Component {
  render () {

    const postLinks = []
      // Sort pages.
      const sortedPosts = sortBy(this.props.route.pages, (post) =>
        access(post, 'data.date')
      ).reverse()

      sortedPosts.forEach((post) => {
        // console.log(post)
        // Posts are those with md extension that are not 404 posts OR have a date (meaning they're a react component post).
        if (access(post, 'file.ext') === 'md' && access(post, 'file.dir') === 'blog' && !include(post.path, '/404') || access(post, 'data.date')) {
          const title = access(post, 'data.title') || post.path
          postLinks.push(
            <li key={post.path}>
              <Link to={prefixLink(post.path)}>{title}</Link>
            </li>
          )
        }
      })
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
        <ul className="post-list">
          {postLinks}
        </ul>
      </div>
    )
  }
}

PostIndex.propTypes = {
  route: React.PropTypes.object
}

export default PostIndex
