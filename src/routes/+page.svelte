<script>
	import { beers } from '../stores/beer';
	import BeerCard from '../components/beerCard.svelte';
</script>

<svelte:head>
	<title>Svelte index page</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">This is my first SvelteKit Beer app</h1>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each $beers as beer}
		<BeerCard {beer} />
	{/each}
</div>
