import { writable } from 'svelte/store';
import config from '$lib/config'

const speed_store = writable(config.default_values.parameters.speed);

export default speed_store;