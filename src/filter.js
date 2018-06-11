console.groupCollapsed('FILTER');

const valores = [10, 15, 20, 25, 30, 35, 40, 45];

const checaPar = (valor) => {
  return valor % 2 === 0;
}

const pares = valores.filter(checaPar);
console.log(pares); // 10, 20, 30, 40


const divisivelPor4 = valores.filter(valor => valor % 4 === 0);
console.log(divisivelPor4); // 20, 40

console.groupEnd();
