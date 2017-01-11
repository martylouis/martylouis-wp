import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import include from 'underscore.string/include'

class PostList extends React.Component {
  render() {
    const postListItems = []

    // Setup sort posts function
    const sortedPosts = sortBy(
      this.props.postRoute.pages, (post) => access(post, 'data.date')
    ).reverse()

    // Filter
    sortedPosts.forEach((post) => {
      const postType = (
        access(post, 'file.ext') === 'md' // only posts with .md ext
        && !include(post.path, '/404') // not 404 posts
        && access(post, 'file.dirname') === this.props.postDir // only in specific directory
        // || access(post, 'data.date')
      )
      if (postType) {
        console.log(post);
        const title = access(post, 'data.title') || post.path
        postListItems.push(
          <li key={post.path} className="post-list-item">
            <Link to={prefixLink(post.path)}>{post.data.date} - {title}</Link>
          </li>
        )
      }
    })

    return (
      <ul className="post-list">
        {postListItems}
      </ul>
    )
  }
}

PostList.propTypes = {
  postRoute: React.PropTypes.object,
  postDir: React.PropTypes.string
}

export default PostList
