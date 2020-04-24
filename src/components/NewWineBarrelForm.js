import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewWineBarrelForm(props){

  function handleNewWineBarrelFormSubmission(event) {
    //something goes here
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewWineBarrelFormSubmission}>
        <input
        type='text'
        name='name'
        placeholder='Wine name'/>
              <input
        type='text'
        origin='origin'
        placeholder='State/Region'/>
        <input
        type='text'
        liters='liters'
        placeholder='Liters'/>
        <button type='submit'>Add new barrel</button>
      </form>
    </React.Fragment>
  )
}

export default NewWineBarrelForm;

NewWineBarrelForm.propTypes = {

}