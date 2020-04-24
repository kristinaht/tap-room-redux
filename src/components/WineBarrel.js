import React from 'react';
import PropTypes from 'prop-types';

function WineBarrel(props){
  return(
    <React.Fragment>
      <h2>{props.name}</h2>
      <h3>{props.origin}</h3>
      <h3>{props.liters}</h3>
    </React.Fragment>
  );
}

export default WineBarrel;

WineBarrel.propTypes={

}