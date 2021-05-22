import React, { Component } from 'react';
import sum from '../controller/exercicio-01';

class Exercicio01 extends Component {
  state = sum(2, 5);
  render() {
    return (
      <div>
        <h1>Exercício 01</h1>
        <p> {this.state.soma} </p>
      </div>
    );
  }
}

export default Exercicio01;
