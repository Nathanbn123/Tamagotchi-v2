import React from 'react';
import Moment from 'moment';

import FoodMeter from './FoodMeter';
import SleepMeter from './SleepMeter';
import TamaDisplay from './TamaDisplay';
import TamaForm from './TamaForm';
import Death from './Death';

class TamagotchiControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hunger: 10,
      sleep: 10,
      isNamed: false,
      isAlive: true
    }
    this.displayTimeOpen = this.displayTimeOpen.bind(this);
    this.handleNaming = this.handleNaming.bind(this);
    this.handleNewTama = this.handleNewTama.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);

  }

  handleNaming(name) {
    this.setState({name: name});
    this.setState({isNamed: true});
  }

  handleNewTama() {
    this.setState({birthingTime: new Moment()})
    this.feedMe = setInterval( () =>
      this.setState( { hunger : (this.state.hunger - 1) } ), 1000
    )
    this.restPlz = setInterval( () =>
    this.setState( {sleep : (this.state.sleep - 1) } ), 5000
    )
    this.deathCheck = setInterval( () => {
      if (this.state.hunger == 0 || this.state.sleep == 0){
        this.setState({isAlive: false})
      }
    }, 1000 )
   }
  displayTimeOpen() {
    return this.state.birthingTime.from(new Moment(), true);
  }

  updateTime() {
    this.setState({existence: this.state.birthingTime.fromNow(true)})
  }

  handleStatusChange(statusToChange, amount) {
    this.setState( {[statusToChange] : (this.state[statusToChange] + amount)} );
  }

  handleDeath() {
    clearInterval(this.feedMe);
    clearInterval(this.restPlz);
    clearInterval(this.deathCheck);
  }





  render() {

    let activeComponent = null;
    if (!this.state.isAlive) {
      activeComponent = <Death />
    } else if (this.state.isNamed) {
        activeComponent = <TamaDisplay
          onStatusChange={this.handleStatusChange}
          updateTime={this.updateTime.bind(this)}
          onNewTama={this.handleNewTama}
          tama={this.state}
          onDeath={this.handleDeath}
          />

      }  else {
        activeComponent = <TamaForm onNaming={this.handleNaming}/>;
      }





    return (
      <div>
        {activeComponent}
      </div>
    )
  }
}


export default TamagotchiControl;
