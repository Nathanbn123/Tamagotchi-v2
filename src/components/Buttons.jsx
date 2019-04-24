import React from 'react';
import PropTypes from 'prop-types';



function Buttons(props) {

  function giveFood() {
    props.onStatusChange("hunger", 25);
  }

  function giveSleep() {
    props.onStatusChange("sleep", 3);

  }


  return(
    <div>
      <button onClick={giveFood}>Feed it</button>
      <button onClick={giveSleep}>Give rest</button>

    </div>

  );

}

export default Buttons;
