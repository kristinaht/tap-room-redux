import React from 'react';
import WineBarrelList from './WineBarrelList';
import NewWineBarrelForm from './NewWineBarrelForm';
import WineBarrelDetail from './WineBarrelDetail';
import { connect } from 'react-redux';
import * as a from './../actions';
import PropTypes from 'prop-types';

// class WineControl extends React.Component {

function WineControl(props) {

  const { dispatch } = props;

  // constructor(props) {
  //   super(props);
  //   props={
  //     // formVisibleOnPage: false, - LOCAL STATE
  //     // masterWineBarrelList: [], - SHARED STATE
  //     selectedWineBarrel: null  //- LOCAL STATE
  //     // youWantToMuchWineMessage: null
  //   };
  // }

  const handleClick = () => {
    if (props.selectedWineBarrel != null){
      const action = a.unselectWineBarrel();
      dispatch(action);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }  
  }

  const handleAddingNewWineBarrelToList = (newWineBarrel) => {
    const action = a.addWineBarrel(newWineBarrel);
    dispatch(action);
    const actionTwo = a.toggleForm();
    dispatch(actionTwo);
  }

  const handleChangingSelectedWineBarrel = (id) => {
    const { dispatch } = props;
    const selectedWineBarrel = props.masterWineBarrelList[id];
    const action = a.selectWineBarrel(selectedWineBarrel);
    dispatch(action);
  }

  const handleWineBarrelPurchase = (id) => {
    const currentlySelectedWineBarrel = props.masterWineBarrelList.filter(wineBarrel => wineBarrel.id === id)[0];
    const currentLiters = parseInt(currentlySelectedWineBarrel.liters);
    const purchaseAmount = 200;
    if (currentLiters >= purchaseAmount ){
      const newLitersInBarrel = currentlySelectedWineBarrel.liters - purchaseAmount;
      const prevWineBarrelList = props.masterWineBarrelList.filter(wineBarrel => wineBarrel.id !== id);
      const updatedWineBarrel = { ...currentlySelectedWineBarrel, liters: newLitersInBarrel};
      this.setState({
        masterWineBarrelList: [...prevWineBarrelList, updatedWineBarrel],
        selectedWineBarrel: updatedWineBarrel
      });
    } 
  }

  const handleDeletingWineBarrel = (id) => {
    const action = a.deleteWineBarrel(id);
    dispatch(action);
    const actionTwo = a.unselectWineBarrel();
    dispatch(actionTwo);
  }

  // render(){
    let currentlyVisibleState=null;
    let buttonText=null;

    if(props.selectedWineBarrel != null){
      currentlyVisibleState=<WineBarrelDetail wineBarrel={props.selectedWineBarrel} onClickingDelete={ handleDeletingWineBarrel } />
      buttonText="Return to Wine Barrel List";
    } else if(props.formVisibleOnPage){
      currentlyVisibleState=<NewWineBarrelForm onNewWineBarrelCreation={handleAddingNewWineBarrelToList}/>;
      buttonText="Return to Wine Barrel List";
    } else {
      currentlyVisibleState=<WineBarrelList wineBarrelList={props.masterWineBarrelList} onWineBarrelSelection={handleChangingSelectedWineBarrel} onClickingSell={handleWineBarrelPurchase} />;
      buttonText="Add Wine Barrel";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  // }
}

WineControl.propTypes = {
  masterWineBarrelList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterWineBarrelList: state.masterWineBarrelList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedWineBarrel: state.selectWineBarrel
  }
}

WineControl = connect(mapStateToProps)(WineControl);

export default WineControl;