console.groupCollapsed('SCOPES');

var a = 'Foo';

{
  var a = 'Bar';

  console.log(a);
}

console.log(a);

let b = 'Olá';

{
  let b = 'Mundo';

  console.log(b);
}

console.log(b);

function print() {
  const c = 'Foobar';

  console.log(c);
}

// console.log(c); <- gera erro

print();

console.groupEnd();
