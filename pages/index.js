import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Header from '../components/header'
import Footer from '../components/footer'
import { LogoMark } from '../components/Logo';
import { martylouis } from '../data/icons'
import { HomeHero, Container, color } from '../components/vars';
import ButtonLink from '../components/button';

class Home extends React.Component {
  render () {
    return (
      <main className="root home">
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Header bgTheme="dark" bgColor={color.blue} />
        <HomeHero>
          <Container>
            <h1 className="tagline">Marty Louis makes websites that people ♥️ to use.</h1>
            <ButtonLink primary to='/contact/'>Contact</ButtonLink>
          </Container>
        </HomeHero>
        <Footer />
      </main>
    )
  }
}

export default Home;
