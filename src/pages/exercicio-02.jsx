import React, { Component } from 'react';
import vallados from '../controller/exercicio-02';

class Exercicio02 extends Component {
  state = {
    triangulo: '',
    l1: 0,
    l2: 0,
    l3: 0,
  };
  render() {
    return (
      <div className="card-container">
        <h1>Exercício 02</h1>
        <p>
          Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de
          seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois
          lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função
          que recebe os comprimentos dos três lados de um triângulo e retorne
          sua classificação quanto ao tamanho de seus lados. (Neste exemplo
          deve-se abstrair as condições matemáticas de existência de um
          triângulo).
        </p>
        <div>
          <h3>Informe os valores:</h3>
          <input
            type="number"
            value={this.state.l1}
            onChange={(digit) => {
              const l1 = parseInt(digit.target.value)
                ? parseInt(digit.target.value)
                : '';
              this.setState({ l1 });
            }}
          />
          <input
            type="number"
            value={this.state.l2}
            onChange={(digit) => {
              const l2 = parseInt(digit.target.value)
                ? parseInt(digit.target.value)
                : '';
              this.setState({ l2 });
            }}
          />
          <input
            type="number"
            value={this.state.l3}
            onChange={(digit) => {
              const l3 = parseInt(digit.target.value)
                ? parseInt(digit.target.value)
                : '';
              this.setState({ l3 });
            }}
          />
          <br />
          <button
            onClick={() => {
              this.setState(
                vallados(this.state.l1, this.state.l2, this.state.l3)
              );
            }}
          >
            classificar
          </button>
          <h3>Resultado:</h3>
          <div>{this.state.triangulo}</div>
        </div>
      </div>
    );
  }
}

export default Exercicio02;
