console.info('DESTRUCTURING ASSIGNMENT');

const numeros = [1, 2, 3];

let [um, dois] = numeros;

console.log(um, dois);

const moto = { nome: 'Fat Bob', marca: 'Harley Davidson', cilindrada: 1600 };

let { nome, marca, cilindrada } = moto;

console.log(`Marca: ${marca} - Modelo: ${nome} - CC: ${cilindrada}`);

const guitarra = { modelo: 'Ghost', fabricante: 'Chapman', cordas: 7 };

let modelo, fabricante, cordas;

({ modelo, fabricante, cordas } = guitarra);

console.log(`Fabricante: ${fabricante} - Modelo: ${modelo} - Cordas: ${cordas}`);
