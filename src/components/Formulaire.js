import React, { Component } from 'react';

const maxLength = 140;

class Formulaire extends Component {
  state = {
    message: '',
    longueur: maxLength,
  };

  handleChange = (event) => {
    const message = event.target.value;
    let longueur = maxLength - message.length;
    this.setState({ message, longueur });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { message, longueur } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          value={message}
          onChange={this.handleChange}
          maxLength={maxLength}
          cols="50"
          rows="5"
          required/>
        <div className="info">{longueur}</div>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

export default Formulaire;
