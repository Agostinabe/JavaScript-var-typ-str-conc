const nombre = 'Ago';
const edad = 23;

const uniendoConMas = 'hola soy ' + nombre + ' y tengo ' + edad + ' años.';

console.log(uniendoConMas);

const uniendoConBackTicks = `hola soy ${nombre} y tengo ${edad} años`;
console.log(uniendoConBackTicks);

const simple = 'programacion';
console.log('hola, yo enseño ' + simple);

//concatenar con método
const parte1 = 'hola soy Ago ';
const parte2 = 'y tengo 23 años';

const uniendo = parte1.concat(parte2);
console.log(uniendo);

let probando = prueba; 