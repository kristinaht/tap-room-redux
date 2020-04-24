import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewWineBarrelForm(props){

  function handleNewWineBarrelFormSubmission(event) {
    event.preventDefault();
    props.onNewWineBarrelCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      liters: event.target.liters.value, 
      id: v4()});
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.liters.value);
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
        name='origin'
        placeholder='State/Region'/>
        <input
        type='text'
        name='liters'
        placeholder='Liters'/>
        <button type='submit'>Add new barrel</button>
      </form>
    </React.Fragment>
  )
}

export default NewWineBarrelForm;

NewWineBarrelForm.propTypes = {

}