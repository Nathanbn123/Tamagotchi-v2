import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TamaForm(props) {
  let _name = null;

  function handleFormSubmit(e) {
    e.preventDefault();
    props.onNaming(_name.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type='text' placeholder='Enter a name' ref={(input) => {_name = input;}}/>
      <br></br>
      <button type='submit'>Create</button>

      <style jsx>{`
        form {
            text-align: center;
            
            }

          button {


          }


`}
      </style>
</form>
  );
}

TamaForm.propTypes = {
  onNaming : PropTypes.func
};

export default TamaForm;
