console.groupCollapsed('DESTRUCTURING ASSIGNMENT');

const numeros = [1, 2, 3];

const [um, dois] = numeros;
// var um = numeros[0]; var dois = numeros[1];

console.log(um, dois);
// 1 2

const moto = { nome: 'Fat Bob', marca: 'Harley Davidson', cilindrada: 1600 };

const { nome, marca, cilindrada } = moto;
// var nome = moto.nome;
// var marca = moto.marca;
// var cilindrada = moto.cilindrada;

console.log(`Marca: ${marca} - Modelo: ${nome} - CC: ${cilindrada}`);
// Marca: Harley Davidson - Modelo: Fat Bob - CC: 1600

console.groupEnd();
