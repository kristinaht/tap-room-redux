import React from 'react';
import WineBarrelList from './WineBarrelList';
import NewWineBarrelForm from './NewWineBarrelForm';
import WineBarrelDetail from './WineBarrelDetail';
import { connect } from 'react-redux';
import * as a from './../actions';

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      // formVisibleOnPage: false, - LOCAL STATE
      // masterWineBarrelList: [], - SHARED STATE
      // selectedWineBarrel: null  - LOCAL STATE
      // youWantToMuchWineMessage: null
    };
  }

  handleClick = () => {
    if (this.state.selectedWineBarrel != null){
      this.setState({
        formVisibleOnPage: false,
        selectedWineBarrel: null
      });
    } else {
      this.setState(prevState =>({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }  
  }

  handleAddingNewWineBarrelToList = (newWineBarrel) => {
    const { dispatch } = this.props;
    const { id, name, origin, liters } = newWineBarrel;
    const action = {
      type: a.addWineBarrel,
      name: name,
      origin: origin,
      liters: liters,
      id: id
    }
    dispatch(action);
    

    // const newMasterWineBarrelList = this.state.masterWineBarrelList.concat(newWineBarrel);
    //   this.setState({masterWineBarrelList: newMasterWineBarrelList
    // });
    // this.setState({ formVisibleOnPage: false});
  }

  handleChangingSelectedWineBarrel = (id) => {
    const { dispatch } = this.props;
    const action = {
      
    }


    // const selectedWineBarrel = this.state.masterWineBarrelList.filter(wineBarrel => wineBarrel.id === id)[0];
    // this.setState({selectedWineBarrel: selectedWineBarrel});
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
    const action = {
     type: a.deleteWineBarrel,
     id: id
    }


    // const newMasterWineBarrelList = this.state.masterWineBarrelList.filter(wineBarrel => wineBarrel.id !== id);
    // this.setState({
    //   masterWineBarrelList: newMasterWineBarrelList,
    //   selectedWineBarrel: null
    // });
  }

  render(){
    let currentlyVisibleState=null;
    let buttonText=null;

    if(this.state.selectedWineBarrel != null){
      currentlyVisibleState=<WineBarrelDetail wineBarrel={this.state.selectedWineBarrel} onClickingDelete={ this.handleDeletingWineBarrel } />
      buttonText="Return to Wine Barrel List";
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState=<NewWineBarrelForm onNewWineBarrelCreation={this.handleAddingNewWineBarrelToList}/>;
      buttonText="Return to Wine Barrel List";
    } else {
      currentlyVisibleState=<WineBarrelList wineBarrelList={this.state.masterWineBarrelList} onWineBarrelSelection={this.handleChangingSelectedWineBarrel} onClickingSell={this.handleWineBarrelPurchase} />;
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



WineControl = connect()(WineControl);

export default WineControl;