import React, { Component, Fragment } from 'react';
import './App.css';
import Message from './components/Message';
import Formulaire from './components/Formulaire';

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  } 

  addMessage = message => {
    const messages = { ... this.state.messages}
    messages[`m-${Date.now()}`] = message
    this.setState({messages})
  
  }

  render() {
    
    const listeMessages = Object
      .keys(this.state.messages )
      .map(cle => (<Message key={cle} message={this.state.messages[cle]}/>))
      
    return (
      <Fragment>
        <div className="box">
          <div className='messages'>
            <div className='message'>
            { listeMessages }
            </div>
          </div>
          <Formulaire pseudo={this.state.pseudo} addMessage={this.addMessage} />
        </div>
        
      </Fragment>
    );
  }
}

export default App;
