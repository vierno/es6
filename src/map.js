console.groupCollapsed('MAP');

const valores = [10, 20, 30];

const duplica = (valor) => {
  return valor * 2;
}

const duplicados = valores.map(duplica);

console.log(duplicados); // 20, 40, 60


const quadruplicados = valores.map(valor => valor * 4);

console.log(quadruplicados); // 40, 80, 120

console.groupEnd();
