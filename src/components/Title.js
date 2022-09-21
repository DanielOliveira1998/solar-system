import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    // const { headlime } = this.props.headlime;
    return (<title><h2>{ headlime }</h2></title>);
  }
}

headlime.propTypes = { headlime: PropTypes.string };

export default Title;
