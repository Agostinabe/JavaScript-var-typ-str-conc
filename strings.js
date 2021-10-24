//comillas de otro tipo pueden ponerse adentro en el string y usarse como carácteres


let comillasSimples = 'hola! "estoy adentro de comillas" \'igual podemos usar simples\' ';
let comillasDobles = "hola! \" igual podemos usar dobles \" 'yo tambipen estoy adentro de comillas!'";
let comillaInvertida = `soy un hola desde backtick`;

console.log(comillasSimples);
console.log(comillasDobles);
console.log(comillaInvertida);

//vamos a acceder a un caracter en particular
let conMeTodos = 'hola mundo';

//empezamos a contar desde 0
console.log('usando métodos: ', conMeTodos.charAt(3));
console.log('accediendo directamente al caracter: ', conMeTodos[6]);


//podriamos crear una variable nueva para guardar ese caracter que queremos
let unaLetra = conMeTodos.charAt(7);
console.log('una letra', unaLetra);