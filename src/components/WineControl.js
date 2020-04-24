import React from 'react';
import WineBarrelList from './WineBarrelList';
import NewWineBarrelForm from './NewWineBarrelForm';

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisibleonPage: false,
      masterWineBarrelList: []
    };
  }

  handleClick = () => {
    this.setState(prevState =>({
      formVisibleonPage: !prevState.formVisibleonPage
    }));
  }

  handleAddingNewWineBarrelToList = (newWineBarrel) => {
    const newMasterWineBarrelList = this.state.masterWineBarrelList.concat(newWineBarrel);
      this.setState({masterWineBarrelList: newMasterWineBarrelList,
      formVisibleonPage: false
    });
  }

  render(){
    let currentlyVisibleState=null;
    let buttonText=null;

    if(this.state.formVisibleonPage){
      currentlyVisibleState=<NewWineBarrelForm />;
      buttonText="Return to Wine Barrel List";
    } else {
      currentlyVisibleState=<WineBarrelList wineBarrelList={this.masterWineBarrelList} />;
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