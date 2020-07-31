import React, { Component, Fragment } from 'react';
import './App.css';
import Message from './components/Message';
import Formulaire from './components/Formulaire';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="box">
          <Message />
          <Formulaire />
        </div>
        
      </Fragment>
    );
  }
}

export default App;
