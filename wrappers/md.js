import React from 'react'
import 'css/markdown-styles.css'
import Helmet from "react-helmet"
import { config } from 'config'

import PageTemplate from '../components/Templates/PageTemplate'
import PostTemplate from '../components/Templates/PostTemplate'
import WorkTemplate from '../components/Templates/WorkTemplate'

class MarkdownWrapper extends React.Component {
  render() {
      const { data, file } = this.props.route.page
      let contentType, contentTemplate

      contentType = file.dirname

      if ( contentType === 'work' ) {
        contentTemplate = <WorkTemplate {...this.props} />
      } else if ( contentType === 'post' ) {
        contentTemplate = <PostTemplate {...this.props} />
      } else {
        contentTemplate = <PageTemplate {...this.props} />
      }

    return (
      <div className={`markdown ${contentType}`}>
        <Helmet title={`${data.title} | ${config.siteTitle}`} />
        {contentTemplate}
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

export default MarkdownWrapper
