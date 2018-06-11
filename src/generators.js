console.groupCollapsed('GENERATORS');

function* contador() {
  let cont = 0;

  while (cont < 3) {
    yield cont += 1;
  }
}

let contar = contador();

console.log(contar.next().value); // 1
console.log(contar.next().value); // 2
console.log(contar.next().value); // 3
console.log(contar.next().value); // undefined

function* iterador() {
  yield* arguments;
}

let it = iterador(1, 2, 3);

console.log(it.next().value); // 1
console.log(it.next().value); // 2
console.log(it.next().value); // 3

console.groupEnd();
