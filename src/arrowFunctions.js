console.info('ARROW FUNCTIONS');

// esta função não é anônima
function saudacoes() {
  console.log('Saudações!');
}

// esta function expression é anônima
var saudacao = function() {
  console.log('Saudação!');
}

const ola = () => {
  console.log('Olá!');
}

saudacoes();

saudacao();

ola();
