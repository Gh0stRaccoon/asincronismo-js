const asyncfn = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve('Async!!'), 2000)
			: reject(new Error('Error'));
	});
};

const AnotherFn = async () => {
	const something = await asyncfn();
	console.log(something);
	console.log('Hello');
};

console.log('Before');
AnotherFn();
console.log('After');
