import React from 'react'
// import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import Headroom from 'react-headroom'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { headerNav } from '../data/site'
import Navigation from '../components/Navigation'
import 'css/markdown-styles'
import Logo from '../components/Logo'
import { Container, Header } from '../components/Styles'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },

  render() {

    return (
      <div className="root">
        <Header>
          <Headroom>
            <Logo />
            <Navigation links={headerNav} />
          </Headroom>
        </Header>
        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  },
})
