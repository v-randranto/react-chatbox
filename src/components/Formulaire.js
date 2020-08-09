import React, { Component } from 'react';

const maxLength = 140;

class Formulaire extends Component {
  state = {
    message: '',
    longueur: maxLength,
  };

  createMessage = () => {
    const { addMessage, pseudo} = this.props
    const message = {
      pseudo,
      texte: this.state.message
    }
    addMessage(message)
    this.setState({message: ''})
  }

  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.createMessage()
    }
  }

  handleChange = (event) => {
    const message = event.target.value;
    let longueur = maxLength - message.length;
    this.setState({ message, longueur });
  };

  handleSubmit = (event) => {    
    event.preventDefault();
    this.createMessage()
  };

  render() {
    const { message, longueur } = this.state;
    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <textarea
          name='message'
          value={message}
          onKeyUp={ this.handleKeyUp }
          onChange={ this.handleChange }
          maxLength={ maxLength }
          cols="50"
          rows="5"
          required/>
        <div className="info">{ longueur }</div>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

export default Formulaire;
