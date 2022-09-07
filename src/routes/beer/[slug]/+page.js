export async function load({ params, fetch }) {
	const id = params.slug;
	console.log(id);
	const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
	let beer = await res.json();

	if (res.ok) {
		return {
			beer
		};
	}

	return {
		status: res.status,
		error: new Error('Could not fetch that beer')
	};
}
