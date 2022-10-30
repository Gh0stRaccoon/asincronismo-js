// callback: es una función que se pasa como argumento a otra función, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function sum(num1, num2) {
	return num1 + num2;
}

function calc(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(() => console.log('Hola JS'), 5000);

function gretting(name) {
	console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Gh0stRaccoon');
