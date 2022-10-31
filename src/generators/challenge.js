import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = async (urlApi) => {
	const response = await fetch(urlApi);
	const data = await response.json();
	return data;
};

async function* iterData(urlApi, data) {
	for (let element of data) {
		const product = await fetchData(`${urlApi}/products/${element.id}`);
		const category = await fetchData(
			`${urlApi}/categories/${product.category.id}`
		);
		yield { product: product.title, category: category.name };
	}
}

const iter = await fetchData(`${API}/products`).then((products) =>
	iterData(API, products)
);

iter.next().then(({ value, done }) => console.log(value));
