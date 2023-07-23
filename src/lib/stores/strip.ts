import { writable } from 'svelte/store';
import type CellModel from '$lib/models/cell';
import type Strip from "$lib/models/strip"

function generate_default_value() {
    return <Strip>{
		index: 0,
		cells: [],
	}
}

function create_strip_store() {
	const { subscribe, set, update } = writable(generate_default_value());

	return {
		subscribe,
		reset: () => set(generate_default_value()),
		init: (blank_value: string) => set(<Strip>{
			index: 0,
			cells: [<CellModel>{
				value: blank_value,
			}],
		}),

	};
}

const strip_store = create_strip_store();

export default strip_store;