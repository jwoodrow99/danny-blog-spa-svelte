<script lang="ts">
	import Router from './Router.svelte';
	import { link } from 'svelte-spa-router';

	import { test } from './GlobalStore';
</script>

<header>
	<a href="/" use:link>Home</a>
	<a href="/login" use:link>Login</a>
</header>

<main>
	{$test}
	<Router />
</main>

<footer>
	<div>THis is the footer</div>
</footer>

<style>
</style>
