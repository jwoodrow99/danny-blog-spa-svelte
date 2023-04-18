<script>
	import { test } from '../GlobalStore';

	const update = () => {
		test.set($test + 1);
	};
</script>

<div>LoginPage</div>

<button on:click={() => update()}> Increment X </button>

<style>
	/* styles go here */
</style>
