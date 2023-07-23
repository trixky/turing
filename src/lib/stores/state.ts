import { writable } from 'svelte/store';

function generate_default_value() {
	return <string | null>null
}

function create_state_store() {
	const { subscribe, set } = writable(generate_default_value());

	return {
		subscribe,
		change: (value: string) => {
            console.log("change state to ", value);
            set(value)
        },
	};
}

const state_store = create_state_store();

export default state_store;