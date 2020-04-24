import React from 'react';
import WineBarrel from './WineBarrel';
import PropTypes from 'prop-types';


function WineBarrelList(props){
  return(
    <React.Fragment>
      <hr />
      {props.wineBarrelList.map((wineBarrel) =>
        <WineBarrel
        name={wineBarrel.name}
        origin={wineBarrel.origin}
        liters={wineBarrel.liters}
        />
        )}
      </React.Fragment>
  );
}

export default WineBarrelList;

WineBarrelList.propTypes={
  wineBarrelList: PropTypes.array
}