import React from 'react';
import PropTypes from 'prop-types';

function WineBarrel(props){
  return(
    <React.Fragment>
      {/* <div onClick = {() => props.whenWineBarrelClicked(props.id)}> */}
      <div>
      <h2>{props.name}</h2>
      <h3>{props.origin}</h3>
      <h3>{props.liters}</h3>
      </div>
      <button onClick = {() => props.whenSellClicked(props.id)} type='submit'>SELL</button>
      <button onClick = { () => props.whenWineBarrelClicked(props.id)}>Details</button>
    </React.Fragment>
  );
}

export default WineBarrel;

WineBarrel.propTypes={
  whenWineBarrelClicked: PropTypes.func,
  name: PropTypes.string,
  origin: PropTypes.string,
  liters: PropTypes.number,
  id: PropTypes.string
}