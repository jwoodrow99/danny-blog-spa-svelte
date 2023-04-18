<script lang="ts">
	import Router from 'svelte-spa-router';

	import HomePage from './pages/HomePage.svelte';
	import LoginPage from './pages/LoginPage.svelte';

	const routes = {
		'/': HomePage,
		'/login': LoginPage,
	};
</script>

<Router {routes} />

<style>
</style>
