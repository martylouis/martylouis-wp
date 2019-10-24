import React from 'react'
import 'css/markdown-styles.css'
import Helmet from "react-helmet"
import { config } from 'config'
import 'css/markdown-styles'
import Header from '../components/header'
import Footer from '../components/footer'
import PageTemplate from '../components/template/PageTemplate'
import PostTemplate from '../components/template/PostTemplate'
import WorkTemplate from '../components/template/WorkTemplate'

class MarkdownWrapper extends React.Component {
  render() {
      // Get theme colors

     // Which template should we use?
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
      <div className={`root markdown template-${contentType}`}>
        <Helmet title={`${data.title} | ${config.siteTitle}`} />
        <Header bgTheme={data.headerTheme} bgColor={data.headerColor} />
        {contentTemplate}
        <Footer />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

export default MarkdownWrapper
