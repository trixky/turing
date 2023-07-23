import { writable } from 'svelte/store';

const state_store = writable(<string | null>null);

export default state_store;