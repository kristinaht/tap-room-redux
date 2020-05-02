import React from 'react';
import WineBarrel from './WineBarrel';
import PropTypes from 'prop-types';


function WineBarrelList(props){
  return(
    <React.Fragment>
      <hr />
      {Object.values(props.wineBarrelList).map((wineBarrel) =>{
        return <WineBarrel
        whenWineBarrelClicked = { props.onWineBarrelSelection }
        whenSellClicked = { props.onClickingSell}
        name={wineBarrel.name}
        
        origin={wineBarrel.origin}
        liters={wineBarrel.liters}
        key={wineBarrel.id}
        id={wineBarrel.id}
        />
      })}
        
      </React.Fragment>
  );
}

export default WineBarrelList;

WineBarrelList.propTypes={
  wineBarrelList: PropTypes.object,
  onWineBarrelSelection: PropTypes.func,
  onClickingSell: PropTypes.func
}