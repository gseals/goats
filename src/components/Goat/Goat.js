import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
    captureGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  captureGoatEvent = (e) => {
    const { captureGoat, goat } = this.props;
    e.preventDefault();
    captureGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card col-3">
        <img src={goat.imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          <div className='d-flex justify-content-around'>
          <div className='btn btn-outline-secondary' onClick={this.freeGoatEvent} >Free Me</div>
          <div className='btn btn-outline-info' onClick={this.captureGoatEvent} >Capture Goat</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
