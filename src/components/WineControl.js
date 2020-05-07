import React from 'react';
import WineBarrelList from './WineBarrelList';
import NewWineBarrelForm from './NewWineBarrelForm';
import WineBarrelDetail from './WineBarrelDetail';
import { connect } from 'react-redux';
import * as a from './../actions';
import PropTypes from 'prop-types';

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      // formVisibleOnPage: false, //- LOCAL STATE
      // masterWineBarrelList: [], - SHARED STATE
      selectedWineBarrel: null  //- LOCAL STATE
      // youWantToMuchWineMessage: null
    };
  }

  handleClick = () => {
    if (this.state.selectedWineBarrel != null){
      this.setState({
        selectedWineBarrel: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }  
  }

  handleAddingNewWineBarrelToList = (newWineBarrel) => {
    const { dispatch } = this.props;
    const action = a.addWineBarrel(newWineBarrel);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedWineBarrel = (id) => {
    const selectedWineBarrel = this.props.masterWineBarrelList[id];
    this.setState({selectedWineBarrel: selectedWineBarrel});
  }

  handleWineBarrelPurchase = (id) => {
    const currentlySelectedWineBarrel = this.state.masterWineBarrelList.filter(wineBarrel => wineBarrel.id === id)[0];
    const currentLiters = parseInt(currentlySelectedWineBarrel.liters);
    const purchaseAmount = 200;
    if (currentLiters >= purchaseAmount ){
      const newLitersInBarrel = currentlySelectedWineBarrel.liters - purchaseAmount;
      const prevWineBarrelList = this.state.masterWineBarrelList.filter(wineBarrel => wineBarrel.id !== id);
      const updatedWineBarrel = { ...currentlySelectedWineBarrel, liters: newLitersInBarrel};
      this.setState({
        masterWineBarrelList: [...prevWineBarrelList, updatedWineBarrel],
        selectedWineBarrel: updatedWineBarrel
      });
    } 
  }

  handleDeletingWineBarrel = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteWineBarrel(id);
    dispatch(action);
    this.setState({ selectedWineBarrel: null });
  }

  render(){
    let currentlyVisibleState=null;
    let buttonText=null;

    if(this.state.selectedWineBarrel != null){
      currentlyVisibleState=<WineBarrelDetail wineBarrel={this.state.selectedWineBarrel} onClickingDelete={ this.handleDeletingWineBarrel } />
      buttonText="Return to Wine Barrel List";
    } else if(this.props.formVisibleOnPage){
      currentlyVisibleState=<NewWineBarrelForm onNewWineBarrelCreation={this.handleAddingNewWineBarrelToList}/>;
      buttonText="Return to Wine Barrel List";
    } else {
      currentlyVisibleState=<WineBarrelList wineBarrelList={this.props.masterWineBarrelList} onWineBarrelSelection={this.handleChangingSelectedWineBarrel} onClickingSell={this.handleWineBarrelPurchase} />;
      buttonText="Add Wine Barrel";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

WineControl.propTypes = {
  masterWineBarrelList: PropTypes.object
}

const mapStateToProps = state => {
  return{
    masterWineBarrelList: state.masterWineBarrelList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

WineControl = connect(mapStateToProps)(WineControl);

export default WineControl;