<script>
	export let feedback = [];
	import FeedbackItem from './FeedbackItem.svelte';
</script>

{#each feedback as fb (fb.id)}
	<div>
		<FeedbackItem item={fb} />
		<!-- <h3>{fb.text}</h3> -->
	</div>
{/each}
