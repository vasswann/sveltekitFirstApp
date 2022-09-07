<script>
	import FeedbackList from '../../components/FeedbackList.svelte';
	import FeedbackForm from '../../components/FeedbackForm.svelte';
	let feedback = [
		{
			id: 1,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque expedita voluptatibus officia sapiente? Eos, possimus.'
		},
		{
			id: 2,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque?.'
		},
		{
			id: 3,
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, a nesciunt. Accusamus, obcaecati ea! Animi odit cupiditate saepe voluptates vel.'
		}
	];
</script>

<svelte:head>
	<title>Svelte about page</title>
</svelte:head>

<h1 class="text-4xl text-center py-8 uppercase">This is coming from the about page</h1>

<FeedbackForm />
<FeedbackList {feedback} />

<style>
</style>
