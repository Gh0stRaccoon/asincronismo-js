// Una promesa tiene 3 estados, Pendiente, Cumplido, Rechazado

const promise = new Promise((res, rej) => {
	resolve('HEEEY!');
});

const cows = 9;

const countCows = new Promise((resolve, reject) => {
	if (cows > 10) {
		resolve(`We have ${cows} cows on the farm`);
	} else {
		reject("There's no cows on the farm");
	}
});

countCows
	.then((result) => {
		console.log(result);
	})
	.catch((error) => console.error(error))
	.finally(() => console.log('Finally'));
