import { injectGlobal, css, keyframes } from 'styled-components'
import styled from 'styled-components'
import { rhythm } from 'utils/typography' // padding: ${rhythm(1)} ${rhythm(3/4)};

// Third Party Components


/**
 *
 * GLOBAL
 *
 */

const color = {
  blue: "#343E47",
  green: "#00BB72"
}

injectGlobal`

  body {
    background-color: #F8F8F8;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }

`;


/**
 *
 * Animations
 *
 */

const easeOutCubic = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${rhythm(1)} ${rhythm(3/4)};
`;


/**
 *
 * HEADER
 *
 */
export const Header = styled.header`
  opacity: 0;
  animation: ${fadeIn} 400ms 700ms ${easeOutCubic} 1;
  animation-fill-mode: forwards;

  .headroom {
    background-color: white;
    display: flex;
    align-items: center;
  }

  .headroom-scrolled {
    transition: transform 100ms ease-in-out;
  }
`;

export const HeaderNav = styled.nav`

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0;
  }

  a {
    display: block;
    font-family: 'Roboto Condensed';
    text-decoration: none;
    color: ${color.blue};
    padding: 0 ${rhythm(1/4)};
    text-transform: uppercase;
    font-size: ${rhythm(5/8)};

    &.active {
      color: ${color.green};
    }
  }

`;

/**
 *
 * LOGO
 *
 */


export const LogoWrap = styled.div`
  span {
    display: none;
  }

  a {
    display: block;
    margin-right: 10px;
  }
`

export const LogoMark = styled.h1`
  box-sizing: border-box;
  position: relative;
  width: 72px;
  height: 72px;
  padding: 5px;
  margin: 0;
  background-color: ${color.blue};
  path {
    fill: white;
  }

`
