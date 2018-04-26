console.info('FILTER');

const valores = [10, 15, 20, 25, 30, 35, 40, 45];

const checaPar = (valor) => {
  return valor % 2 === 0;
}

const pares = valores.filter(checaPar);

console.log(pares); // 10, 20, 30, 40

const impares = valores.filter((valor) => {
  return valor % 2 !== 0;
});

console.log(impares); // 15, 25, 35, 45

const divisivelPor4 = valores.filter(valor => valor % 4 === 0);

console.log(divisivelPor4); // 20, 40
