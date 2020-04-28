import React from 'react';
import PropTypes from 'prop-types';

function WineBarrelDetail(props) {
  const { wineBarrel, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Wine Barrel Details</h1>
      <h2>{wineBarrel.name}</h2>
      <h3>{wineBarrel.origin}</h3>
      <h3>{wineBarrel.liters}</h3>
      <button onClick={ () => onClickingDelete(wineBarrel.id) }>DELETE</button>
    </React.Fragment>
  )
}

export default WineBarrelDetail;

WineBarrelDetail.propTypes={
  wineBarrel: PropTypes.object,
  onClickingDelete: PropTypes.func
}