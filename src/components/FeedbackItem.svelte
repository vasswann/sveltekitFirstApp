<script>
	import Card from './Card.svelte';
	export let item;
</script>

<Card>
	<p class="text-display">
		{item.text}
	</p>
</Card>
