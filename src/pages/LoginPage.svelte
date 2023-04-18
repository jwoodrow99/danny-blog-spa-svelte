<script>
	import { push, pop, replace } from 'svelte-spa-router';
	import { GlobalState } from '../GlobalStore';
	import http from '../http';

	let email = '';
	let password = '';

	const login = () => {
		console.log('login');

		http
			.post('/auth/login/', {
				email: email,
				password: password,
			})
			.then((response) => {
				GlobalState.set({
					authenticated: true,
					user: response.data.user,
				});

				localStorage.setItem('access_token', response.data.access_token);
				localStorage.setItem('user', JSON.stringify(response.data.user));

				push('/');

				email = '';
				password = '';
			})
			.catch((error) => {
				console.log(error.response.status);
				console.log(error.response.data);
			});
	};
</script>

<div>
	<div class="flex flex-col space-y-5 p-10">
		<div class="flex flex-row justify-center w-full">
			<input
				class="text-black px-5 py-2 rounded-full w-full"
				placeholder="email"
				type="text"
				id="email"
				bind:value={email}
			/>
		</div>
		<div class="flex flex-row justify-center w-full">
			<input
				class="text-black px-5 py-2 rounded-full w-full"
				placeholder="password"
				type="password"
				id="password"
				bind:value={password}
			/>
		</div>
		<div class="flex flex-row justify-center w-full">
			<button
				class="btn-primary px-5 py-2 w-full"
				type="button"
				on:click={() => {
					login();
				}}
			>
				Login
			</button>
		</div>
	</div>
</div>

<style>
	/* styles go here */
</style>
