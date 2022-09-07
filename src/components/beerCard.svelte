<script>
	export let beer;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/beer/${beer.id}`}
>
	<img class="h-40 " src={beer.image_url} alt={beer.name} />
	<h2 class="uppercase text-2xl mt-4">{beer.id}. {beer.name}</h2>
</a>
