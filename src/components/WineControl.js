import React from 'react';
import WineBarrelList from './WineBarrelList';
import NewWineBarrelForm from './NewWineBarrelForm';

class WineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={};
  }

  render(){
    return(
      <React.Fragment>
        <WineBarrelList />
        <NewWineBarrelForm />
      </React.Fragment>
    )
  }
}

export default WineControl;