console.groupCollapsed('SPREAD OPERATOR');

const a = [20, 30, 40];
const b = [10, ...a, 50];
console.log(b);


const c = {foo: "bar"}
const d = {...c, x: "y"}
console.log(d)

console.groupEnd();