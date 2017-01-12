import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { LogoWrap, LogoMark } from './Styles';
import { martylouis } from 'data/icons'

const Logo = () =>

  <LogoWrap>
    <Link to={prefixLink('/')}>
      <LogoMark dangerouslySetInnerHTML={{__html: martylouis}} />
      <span>Marty Louis Logo</span>
    </Link>
  </LogoWrap>

export default Logo
