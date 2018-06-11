console.groupCollapsed('REST PARAMS');

function minhaFuncao(primeiro, ...lista) {
  console.log('Primeiro parâmetro:', primeiro);
  console.log('Lista de parâmetros:', lista);
}

minhaFuncao('Olá', 'Mundo');

minhaFuncao('Olá', 'Mundo', 'Incrível');

console.groupEnd();
