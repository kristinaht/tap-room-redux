import React from 'react';
import PropTypes from 'prop-types';

function WineBarrel(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenWineBarrelClicked(props.id)}>
      <h2>{props.name}</h2>
      <h3>{props.origin}</h3>
      <h3>{props.liters}</h3>
      </div>
    </React.Fragment>
  );
}

export default WineBarrel;

WineBarrel.propTypes={
  whenWineBarrelClicked: PropTypes.func,
  name: PropTypes.string,
  origin: PropTypes.string,
  liters: PropTypes.string,
  id: PropTypes.string
}