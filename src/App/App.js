import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

import GoatCorral from '../components/GoatCorral/GoatCorral';

import AvailableGoats from '../components/AvailableGoats/AvailableGoats';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  captureGoat = (goatId) => {
    goatData.captureAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
    <div className="App">
      <h1>Underwater Goat Yoga</h1>
      <AvailableGoats goats={this.state.goats} />
      <button className='btn btn-danger'>Bootstrap Button</button>
      <GoatCorral goats={this.state.goats} freeGoat={this.freeGoat} captureGoat={this.captureGoat}/>
    </div>
    );
  }
}

export default App;
