import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(
          (item, index) => (
            <MissionCard
              key={ index }
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
            />
          ),
        )}
      </div>
    );
  }
}

export default Missions;
