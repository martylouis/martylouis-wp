import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import { prefixLink } from 'gatsby-helpers'
import { slugify } from '../utils/helpers.js'
import { HeaderNav } from '../components/Styles.js'

class Navigation extends React.Component {

  render() {
    const [...links] = this.props.links ? this.props.links : '';

    return(
      <div>
        { links ? (
          <HeaderNav>
            {
              links.map(
                (nav, index) =>
                  <li
                    className={`nav-item nav-item-${slugify(nav.title)}`}
                    key={index}>
                      <NavLink
                        to={prefixLink(nav.url)}>
                          {nav.title}
                      </NavLink>
                  </li>
              )
            }
          </HeaderNav>
        ) : ('') }
      </div>
    )
  }
}

Navigation.propTypes = {
  links: React.PropTypes.array,
}

export default Navigation;
