import React from 'react';
import WineBarrelList from './WineBarrelList';
import NewWineBarrelForm from './NewWineBarrelForm';
import WineBarrelDetail from './WineBarrelDetail';

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false,
      masterWineBarrelList: [],
      selectedWineBarrel: null
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
    const newMasterWineBarrelList = this.state.masterWineBarrelList.concat(newWineBarrel);
      this.setState({masterWineBarrelList: newMasterWineBarrelList
    });
    this.setState({ formVisibleOnPage: false});
  }

  handleChangingSelectedWineBarrel = (id) => {
    const selectedWineBarrel = this.state.masterWineBarrelList.filter(wineBarrel => wineBarrel.id === id)[0];
    this.setState({selectedWineBarrel: selectedWineBarrel});
  }

  render(){
    let currentlyVisibleState=null;
    let buttonText=null;

    if(this.state.selectedWineBarrel != null){
      currentlyVisibleState=<WineBarrelDetail wineBarrel={this.state.selectedWineBarrel} />
      buttonText="Return to Wine Barrel List";
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState=<NewWineBarrelForm onNewWineBarrelCreation={this.handleAddingNewWineBarrelToList}/>;
      buttonText="Return to Wine Barrel List";
    } else {
      currentlyVisibleState=<WineBarrelList wineBarrelList={this.state.masterWineBarrelList} onWineBarrelSelection={this.handleChangingSelectedWineBarrel} />;
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

export default WineControl;