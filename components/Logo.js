import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { css } from 'styled-components'
import styled from 'styled-components'
import { media, color } from './vars.js'
import { martylouis } from 'data/icons'


export const LogoMark = styled.div`
  width: 6rem;
  height: 3rem;

  path {
    fill: white;
  }
`;

export const LogoWrap = styled.div`
  span {
    display: none;
  }

  a {
    display: block;
    margin-right: 10px;
  }
`;

export const LogoBox = styled.h1`
  width: 3.5rem;
  height: 4rem;
  margin: 0;
  path {
    fill: ${color.blue};
  }

  .dark & path {
    fill: white;
  }
`;



const HeaderLogo = () =>

  <LogoWrap>
    <Link to={prefixLink('/')}>
      <LogoBox dangerouslySetInnerHTML={{__html: martylouis}} />
      <span>Marty Louis Logo</span>
    </Link>
  </LogoWrap>

export default HeaderLogo
