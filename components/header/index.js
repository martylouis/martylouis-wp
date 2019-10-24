import React from 'react'
import Headroom from 'react-headroom'
import { headerNav } from '../../data/site'
import HeaderLogo from '../Logo'
import Nav from './Nav'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import { media, color } from '../vars'

injectGlobal`

  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    will-change: top;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms cubic-bezier( 0.215, 0.610, 0.355, 1.000 );
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.25);
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;


class Header extends React.Component {
  render() {
    const bgColor = this.props.bgColor || 'white';
    return (
      <header className={this.props.bgTheme}>
        <Headroom disableInlineStyles style={{ backgroundColor: bgColor }}>
          <Container>
            <HeaderLogo />
            <Nav links={headerNav} />
          </Container>
        </Headroom>
      </header>
    )
  }
}

export default Header;

Header.propTypes = {
  bgColor: React.PropTypes.string,
  bgTheme: React.PropTypes.string,
}
