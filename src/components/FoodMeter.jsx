import React from 'react';
import PropTypes from 'prop-types';

function FoodMeter(props) {
  return(
    <h1>Food Level: {props.foodLvl} </h1>

  );


}

FoodMeter.PropTypes = {
  foodLvl : PropTypes.number
}

export default FoodMeter;
