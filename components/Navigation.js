import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

class Navigation extends React.Component {
  render() {
    const [...links] = this.props.links;

    return(
      <ul className="nav">
        {
          links.map(
            (nav, index) => <li className={`nav-item nav-item-${index + 1}`} key={index}><NavLink to={`/${nav.url}`}>{nav.label}</NavLink></li>
          )
        }
      </ul>
    )
  }
}

export default Navigation;
