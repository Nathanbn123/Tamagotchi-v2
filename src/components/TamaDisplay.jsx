import React from 'react';
import PropTypes from 'prop-types';
import FoodMeter from './FoodMeter';
import SleepMeter from './SleepMeter';
import Buttons from './Buttons'

class TamaDisplay extends React.Component {
  componentDidMount() {
    this.props.onNewTama();
  }

  componentWillUnmount() {
    this.props.onDeath();
  }


  render()
    {
      return(
      <div>
        <h1>{this.props.tama.name}</h1>
        <h2>{this.props.tama.existence}</h2>
        <FoodMeter foodLvl={this.props.tama.hunger}/>
        <Buttons onStatusChange={this.props.onStatusChange}/>
        <SleepMeter sleepLvl={this.props.tama.sleep}/>
      </div>
    );
  }


}

TamaDisplay.proptypes = {
  tama : PropTypes.object,
  onNewTama : PropTypes.func
}

export default TamaDisplay;
