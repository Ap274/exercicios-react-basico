import React, { Component } from 'react';
import sum from '../controller/exercicio-01';
import './card.css';

class Exercicio01 extends Component {
  state = {
    soma: 0,
    subtracao: 0,
    multiplicacao: 0,
    divisao: 0,
    n1: 0,
    n2: 0,
  };
  render() {
    return (
      <div className="card-container">
        <h1>Exercício 01</h1>
        <p>
          Crie uma função que dado dois valores (passados como parâmetros)
          mostre no console a soma, subtração, multiplicação e divisão desses
          valores.
        </p>
        <h3>Informe os valores:</h3>
        <input
          type="number"
          value={this.state.n1}
          onChange={(digit) => {
            const n1 = parseInt(digit.target.value)
              ? parseInt(digit.target.value)
              : '';
            this.setState({ n1 });
          }}
        />
        <input
          type="number"
          value={this.state.n2}
          onChange={(digit) => {
            const n2 = parseInt(digit.target.value)
              ? parseInt(digit.target.value)
              : '';
            this.setState({ n2 });
          }}
        />
        <button
          onClick={() => this.setState(sum(this.state.n1, this.state.n2))}
        >
          calcular
        </button>
        <h3>Resultados:</h3>
        <div>soma = {this.state.soma}</div>
        <div> subtração = {this.state.subtracao} </div>
        <div> multiplicação = {this.state.multiplicacao} </div>
        <div> divisão = {this.state.divisao} </div>
      </div>
    );
  }
}

export default Exercicio01;
