import React from 'react';
import WineBarrelList from './WineBarrelList';
import NewWineBarrelForm from './NewWineBarrelForm';

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false,
      masterWineBarrelList: []
    };
  }

  handleClick = () => {
    this.setState(prevState =>({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewWineBarrelToList = (newWineBarrel) => {
    const newMasterWineBarrelList = this.state.masterWineBarrelList.concat(newWineBarrel);
      this.setState({masterWineBarrelList: newMasterWineBarrelList
    });
    this.setState({ formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState=null;
    let buttonText=null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState=<NewWineBarrelForm onNewWineBarrelCreation={this.handleAddingNewWineBarrelToList}/>;
      buttonText="Return to Wine Barrel List";
    } else {
      currentlyVisibleState=<WineBarrelList wineBarrelList={this.state.masterWineBarrelList} />;
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