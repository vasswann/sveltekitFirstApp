<script>
	let text = '';
	let type = 'submit';
	let disabled = false;
	let min = 10;
	let message;
	let id = 4;

	const addFeedback = () => {
		if (text.trim().length <= { min }) {
			message = `text must be at least ${min} characters`;
			disabled = true;
		} else {
			message = null;
			disabled = false;
		}
	};

	const handleSubmit = () => {
		const newFeedback = {
			id: id + 1,
			text
		};
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<input
			type="text"
			bind:value={text}
			placeholder="Tell me something about this app"
			on:input={addFeedback}
		/>
		<div class="text-center">
			<button
				{type}
				{disabled}
				class=" mt-7 bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded uppercase"
				>Add feedback</button
			>
		</div>
	</div>
	{#if message}
		<div>
			{message}
		</div>
	{/if}
</form>
