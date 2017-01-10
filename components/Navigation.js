import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import { slugify } from '../utils/helpers.js'

class Navigation extends React.Component {

  render() {
    const [...links] = this.props.links ? this.props.links : '';

    return(
      <div>
        { !links === [] ? (
          <ul className="nav">
            {
              links.map(
                (nav, index) => <li className={`nav-item nav-item-${slugify(nav.label)}`} key={index}><NavLink to={`/${nav.url}`}>{nav.label}</NavLink></li>
              )
            }
          </ul>
        ) : ('') }
      </div>
    )
  }
}

export default Navigation;
