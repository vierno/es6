console.groupCollapsed('VARIABLES');

var a = 100;

console.log("a", a);

// Variável
let b = 100;
b = b + 23;
console.log("b", b);

// Constante
const c = 'Foobar';
// A próxima linha gera um erro
// c = 'Barfoo';
console.log("c", c);

console.groupEnd();