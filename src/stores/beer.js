import axios from 'axios';
import { writable } from 'svelte/store';

export const beers = writable([]);

const fetchBears = async (num = 1) => {
	const url = `https://api.punkapi.com/v2/beers?page=${num}&per_page=24`;
	try {
		const res = await axios(url);
		beers.set(res.data);
	} catch (error) {
		console.log(error);
	}
};

fetchBears();
