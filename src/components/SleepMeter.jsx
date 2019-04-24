import React from 'react';
import PropTypes from 'prop-types';

function SleepMeter(props) {
  return(
    <h1>Sleep Level: {props.sleepLvl}</h1>
  );
}

SleepMeter.proptypes = {
  sleepLvl : PropTypes.number
}

export default SleepMeter;
