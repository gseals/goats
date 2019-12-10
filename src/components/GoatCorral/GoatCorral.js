import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
    captureGoat: PropTypes.func,
  }

  render() {
    const myGoats = this.props.goats;
    const { freeGoat } = this.props;
    const { captureGoat } = this.props;
    // myGoats is the whole array. for each goat component, we are only passing one through the function
    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat} freeGoat={freeGoat} captureGoat={captureGoat}/>);

    return (
      <div className="goatCorral row">
        {goatCards}
      </div>
    );
  }
}

export default GoatCorral;
