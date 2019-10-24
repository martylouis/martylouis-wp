import React from 'react'
import { Link } from 'react-router'


class Template extends React.Component {
  render() {
    return this.props.children;
  }
}

Template.propTypes = {
  children: React.PropTypes.any
};

export default Template;
