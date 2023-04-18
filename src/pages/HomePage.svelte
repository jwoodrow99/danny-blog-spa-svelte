<script>
	import { GlobalState } from '../GlobalStore';
	import httpClient from '../http';

	let blogs = [];

	httpClient
		.get('/blog')
		.then((response) => {
			blogs = response.data.blogs;
		})
		.catch((error) => {
			console.log(error);
		});
</script>

<div>
	<ul>
		{#each blogs as blog, index}
			<li>{blog.title}</li>
		{/each}
	</ul>
</div>

<style>
	/* styles go here */
</style>
