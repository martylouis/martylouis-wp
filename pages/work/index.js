import React from 'react'
import Helmet from "react-helmet"
import { config } from 'config'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PostList from '../../components/PostList'

class WorkIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={`Work | ${config.siteTitle}`}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Header />
        <h1>
          Work Index!
        </h1>
        <PostList postRoute={this.props.route} postDir='work' />
        <Footer />
      </div>
    )
  }
}

WorkIndex.propTypes = {
  route: React.PropTypes.object
}

export default WorkIndex
