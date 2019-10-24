import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import { prefixLink } from 'gatsby-helpers'
import { slugify } from '../../utils/helpers.js'

import { typography } from '../../utils/typography'
import styled from 'styled-components'
import { color } from '../vars'

const Navigation = styled.nav`

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0;
  }

  a {
    font-family: 'Roboto Condensed', sans-serif;
    color: ${color.blue}
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    font-size: 1.1rem;
    padding: 0.5rem;

    .dark & {
      color: white;
    }

    &.active {
      color: ${color.green};
    }
  }
`;

class Nav extends React.Component {

  render() {

    const [...links] = this.props.links ? this.props.links : '';

    return(
      <Navigation>
        { links ? (
          <ul>
            {
              links.map((nav, index) =>
                  <li className={`nav-item nav-item-${slugify(nav.title)}`} key={index}>
                    <NavLink to={prefixLink(nav.url)}>{nav.title}</NavLink>
                  </li>
              )
            }
          </ul>
        ) : ('') }
      </Navigation>
    )
  }
}

Nav.propTypes = {
  links: React.PropTypes.array,
}

export default Nav;
