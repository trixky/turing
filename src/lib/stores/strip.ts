import { writable } from 'svelte/store';
import type CellModel from '$lib/models/cell';
import type Strip from "$lib/models/strip"

function generate_default_value() {
	return <Strip>{
		blank_value: null,
		index: 0,
		cells: [],
	}
}

function create_strip_store() {
	const { subscribe, set, update } = writable(generate_default_value());

	return {
		subscribe,
		reset: () => set(generate_default_value()),
		init: (blank_value: string) => update(strip => {
			strip.blank_value = blank_value;
			strip.cells = [<CellModel>{
				value: blank_value,
			}];
			strip.index = 0;
			return strip;
		}),
		write_current_cell: (value: string) => update(strip => {
			strip.cells[strip.index].value = value;
			console.log("write ", value);
			return strip;
		}),
		move: (action: "RIGHT" | "LEFT") => update(strip => {
			if (strip.blank_value === null) {
				throw new Error("Blank value is not set");
			}
			if (action === "RIGHT") {
				if (strip.index + 1 >= strip.cells.length) {
					strip.cells.push(<CellModel>{
						value: strip.blank_value,
					});
				}
				strip.index++;
			} else {
				if (strip.index - 1 < 0) {
					strip.cells = [<CellModel>{
						value: strip.blank_value,
					}, ...strip.cells];
				} else {
					strip.index--;
				}
			}

			console.log("move ", action);
			return strip;
		})
	};
}

const strip_store = create_strip_store();

export default strip_store;