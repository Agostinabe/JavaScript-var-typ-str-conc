//3 formas de declarar variables:

//var es global y ya no se usa
var primera = 'hola mundo';

//Dos formas que vienen del ES6: let y const

//const es constante, no se puede modificar su contenido
const segunda = 'hola 2';

//let si puede modificar su contenido
let tercera = 'hola 3';

//para imprimir, usamos console.log()
console.log(primera);
console.log(segunda);
console.log(tercera);

//podemos reasignar el valor en los let y var
tercera = 'cambiando el valor!';
console.log('tercera', tercera);

//las constantes son inmutables, node a partir de este punto corta la ejecución
segunda = 'cambiando segunda!';
console.log(segunda);

//los var se pueden cambiar, pero por la constante no va a correr
primera = 'cambiando la var';
console.log(primera);