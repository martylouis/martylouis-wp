import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { alpha, color } from '../vars.js'

const Button = styled(Link)`
  background: ${props => props.primary ? color.green : 'transparent' };
  color: ${props => props.primary ? 'white' : color.green };
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.15em;
  font-size: 0.95em;
  display: inline-block;
  padding: 0.75rem 2em;
  border: 1px solid ${color.green};
  border-radius: 4px;
  box-shadow: 0 5px 10px ${alpha(color.green)(0.15)}, 0 1px 1px ${alpha(color.green)(0.5)};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

/*

<ButtonLink primary to="/contact/">

<ButtonSubmit primary>

 */

class ButtonLink extends React.Component {
  render() {
    return <Button {...this.props } />
  }
}

export default ButtonLink;
