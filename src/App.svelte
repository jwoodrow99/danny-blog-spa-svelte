<script lang="ts">
	import Router from './Router.svelte';
	import { link, push, pop, replace } from 'svelte-spa-router';

	import { GlobalState } from './GlobalStore';

	const accessToken = localStorage.getItem('access_token');
	const localStorageUser: any = localStorage.getItem('user');
	if (accessToken) {
		GlobalState.set({
			authenticated: true,
			user: JSON.parse(localStorageUser),
		});
	}

	const logout = () => {
		GlobalState.set({
			authenticated: false,
			user: null,
		});

		localStorage.removeItem('access_token');
		localStorage.removeItem('user');

		push('/login');
	};
</script>

<div class="text-slate-50">
	<header class="h-16 flex flex-row px-10 bg-slate-900">
		<div class="basis-1/2 flex flex-row items-center">
			<nav class="flex flex-row space-x-3">
				<a href="/" use:link class="hover:text-slate-300">Home</a>
			</nav>
		</div>
		<div class="basis-1/2 flex flex-row items-center justify-end">
			<div class="flex flex-row items-center space-x-3">
				{#if $GlobalState.authenticated}
					<div>{$GlobalState.user?.email}</div>
					<button
						on:click={() => {
							logout();
						}}>Logout</button
					>
				{:else}
					<a href="/login" use:link class="hover:text-slate-300">Login</a>
				{/if}
			</div>
		</div>
	</header>

	<main class="min-h-[calc(100vh-64px-64px)] bg-slate-950">
		<div class="mx-auto w-3/4">
			<Router />
		</div>
	</main>

	<footer class="h-16 flex flex-row items-center justify-center bg-slate-900">
		<div>This is the footer</div>
	</footer>
</div>

<style>
</style>
