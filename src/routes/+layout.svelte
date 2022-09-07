<script>
	import Nav from '../components/nav.svelte';
</script>

<Nav />
<div class="p-8 max-w-6xl mx-auto">
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
