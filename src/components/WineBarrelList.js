import React from 'react';
import WineBarrel from './WineBarrel';
import PropTypes from 'prop-types';


function WineBarrelList(props){
  return(
    <React.Fragment>
      <hr />
      {props.wineBarrelList.map((wineBarrel) =>
        <WineBarrel
        whenWineBarrelClicked = { props.onWineBarrelSelection }
        whenBuyClicked = { props.onClickingBuy}
        name={wineBarrel.name}
        // origin={wineBarrel.origin}
        // liters={wineBarrel.liters}
        key={wineBarrel.id}
        id={wineBarrel.id}
        />
        )}
      </React.Fragment>
  );
}

export default WineBarrelList;

WineBarrelList.propTypes={
  wineBarrelList: PropTypes.array,
  onWineBarrelSelection: PropTypes.func,
  onClickingBuy: PropTypes.func
}