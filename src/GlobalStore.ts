import { writable } from 'svelte/store';
const stateObject = {
	authenticated: false,
	user: null,
};
export const GlobalState = writable(stateObject);
