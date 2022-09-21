import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { name, image } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name" planetName={ name } planetImage={ image } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired, image: PropTypes.string.isRequired,
};

export default PlanetCard;
