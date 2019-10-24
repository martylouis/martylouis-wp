import { injectGlobal, css, keyframes } from 'styled-components'
import styled from 'styled-components'
import chroma from 'chroma-js'
import { adjustFontSizeTo, rhythm } from 'utils/typography'
import { options } from '../utils/typography'

// ================
// Variables
// ================
export const color = {
  blue: "#343E47",
  green: "#00BB72"
}

export const media = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 384
}

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const easeOutCubic = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'

export const antialiasText = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: 'liga', 'kern';
  text-rendering: optimizeLegibility;
  font-synthesis: none;
`

// ================
// Functions
// ================
export const remSize = (pixel) => {
  return pixel / 16;
}

// Color functions
export const alpha = (color) => (a) => chroma(color).alpha(a).css();

// Flex Container
export const flexContainer = (flow) => {
  return `
    display: flex;
    flex-flow: ${flow};
    box-sizing: border-box;
  `;
}


// Media Object
export const media_max = Object.keys(media).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${remSize(media[label])}rem) {
      ${css(...args)}
    }
  `
  return accumulator;
}, {})


// ==================
// Global Styles
// ==================
injectGlobal`

  html {
    ${media_max.tablet`${adjustFontSizeTo('13px')}`}
    ${media_max.phone`${adjustFontSizeTo('12px')}`}
  }

  body,
  input,
  textarea,
  select,
  button {
    ${antialiasText}
  }

  body {
    background-color: #f8f8f8;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
    fill: currentColor;
  }

  .icon {
    display: inline-block;
    line-height: 0;
    fill: currentColor;
  }

`;

export const Container = styled.div`
  max-width: ${props => props.medium ? `${remSize(768)}rem` : `${remSize(992)}rem`};
  margin: 0 auto;
  ${media_max.phone`padding: 0 ${rhythm(1/2)}`};
`;


// Home
export const HomeHero = styled.section`
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  background-color: ${color.blue};
  text-align: center;

  > div {
    max-width: 768px;
  }

  .logo {
    margin: 0 auto;
    path {
      fill: white;
    }
  }

  .tagline {
    margin-top: 2rem;
    font-family: 'Merriweather', serif;
    font-weight: 300;
    line-height: 1.5;
    color: white;
  }
`;
