import { writable } from 'svelte/store';
import type {Description} from "$lib/models/description"
import { DescriptionJoi } from '$lib/models/description';
import joi from 'joi';

function generate_default_value() {
    return <Description>{
        name: "",
        alphabet: [],
        blank: "",
        states: [],
        initial: "",
        finals: [],
        transitions: {},
	}
}

function create_description_store() {
	const { subscribe, set } = writable(generate_default_value());

	return {
		subscribe,
		reset: () => set(generate_default_value()),
        load: (description: string) => {
            const parsed_description = JSON.parse(description);
            const description_validation = DescriptionJoi.validate(parsed_description)
            if (description_validation.error) {
                throw description_validation.error;
            }
            set(description_validation.value);
            console.log(description_validation.value)
        },
	};
}

const description_store = create_description_store();

export default description_store;