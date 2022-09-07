<script>
	export let data;
	const { name, first_brewed, description, image_url, ibu, abv, ebc, srm, ph } = data.beer[0];
</script>

<div
	class="flex flex-col items-center p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<h1 class="text-4xl text-center my-8 uppercase">{name}</h1>
	<img class="  h-40" src={image_url} alt="" />
	<h3>First brewed {first_brewed}</h3>
	<p>{description}</p>
	<br />
	<p>
		<strong>ABV</strong>
		{abv}, <strong>IBU</strong>
		{ibu},
		<strong>EBC</strong>
		{ebc}, <strong>SRM</strong>
		{srm},{' '}
		<strong>PH</strong>
		{ph}
	</p>
	<a
		class="mt-7 bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded uppercase"
		href="/">Back to homplage</a
	>
</div>
