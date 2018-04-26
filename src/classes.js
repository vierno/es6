console.info('CLASSES');

import Veiculo from './veiculo';

class Carro extends Veiculo {
  constructor(marca, modelo) {
    super(marca, modelo);
    this.rodas = 4;
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo) {
    super(marca, modelo);
    this.rodas = 2;
  }
}

const carro = new Carro('Volkswagen', 'Gol');

console.log(carro.marca, carro.modelo, carro.rodas, carro.buzinar());

const moto = new Moto('Harley Davidson', 'Street Bob');

console.log(moto.marca, moto.modelo, moto.rodas, moto.buzinar());

import Calculadora from './calculadora';

console.log(`Resultado da soma: ${Calculadora.somar(2, 2)}`); // 4
