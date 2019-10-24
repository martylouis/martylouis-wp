import React from 'react'
import { Link } from 'react-router';
import Grid from 'grid-styled'
import styled from 'styled-components'
import { css } from 'styled-components'
import Button from '../button'
import { media, color } from '../vars'

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <Grid>
          <Grid md={1/2}>
            <h2>Need a website? Let’s work together.</h2>
            <p>
              <Button primary>Contact</Button>
            </p>
          </Grid>
          <Grid md={1/2}>
            <h2>Need a website? Let’s work together.</h2>
            <p>
              <Button>Contact</Button>
            </p>
          </Grid>
          <Grid md={1/3}>
            <h2>Need a website? Let’s work together.</h2>
            <p>
              <Button>Contact</Button>
            </p>
          </Grid>
          <Grid md={2/3}>
            <h2>Need a website? Let’s work together.</h2>
            <p>
              <Button>Contact</Button>
            </p>
          </Grid>
        </Grid>
        <div>
          <div className="contact">contact</div>
          <div className="social">social-icons</div>
          <div className="nav">nav</div>
          <div className="copyright">
            <p>12671 Emerald Coast Pkwy, #217-9, Miramar Beach FL 32550</p>
            <p>© 2017 MARTY LOUIS LLC.</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
