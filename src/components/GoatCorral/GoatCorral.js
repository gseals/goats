import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const myGoats = this.props.goats;
    // myGoats is the whole array. for each goat component, we are only passing one through the function
    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat} />);

    return (
      <div className="goatCorral row">
        {goatCards}
      </div>
    );
  }
}

export default GoatCorral;
