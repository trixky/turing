<!-- ================================================ SCRIPT -->
<script lang="ts">
	import SpeedStore from '$lib/stores/speed';
	import StripStore from '$lib/stores/strip';
	import DescriptionStore from '$lib/stores/description';
	import StateStore from '$lib/stores/state';
	import Samples from '$lib/samples';

	import DescriptionInformations from '$lib/components/DescriptionInformations.svelte';

	let running = false;
	let stop = false;
	let input_description_value = '';

	const custom_select_value = "custom"

	function handle_select_sample(event: any) {
		if (event.target.value !== custom_select_value) {
			input_description_value = JSON.stringify(Samples[event.target.value], null, 4);
		}
	}

	function handle_load_description() {
		try {
			DescriptionStore.load(input_description_value);
		} catch (error) {
			alert(error);
		}
		StripStore.init($DescriptionStore.blank);
		StateStore.change($DescriptionStore.initial);
	}

	function compute_move() {
		if ($StateStore === null) {
			alert('No state found');
			return;
		}
		const state_transition = $DescriptionStore.transitions[$StateStore]?.find((transition) => {
			return transition.read === $StripStore.cells[$StripStore.index].value;
		});
		if (state_transition === undefined) {
			alert('No transition found');
			return;
		}
		StripStore.write_current_cell(state_transition.write);
		StripStore.move(state_transition.action);
		StateStore.change(state_transition.to_state);
	}

	function next_move() {
		running = true;
		if (stop) {
			stop = false;
			running = false;
			return;
		};

		compute_move()

		setTimeout(() => {
			next_move()
		}, $SpeedStore)
	}

	function handle_start() {
		next_move();
	}

	function handle_stop() {
		stop = true
		running = false;
	}
</script>

<!-- ================================================ CONTENT -->

<h1>Turing</h1>

<DescriptionInformations />
<section>
	<form>
		<div class="description-container">
			<select on:change={handle_select_sample}>
				<option value={custom_select_value}>{custom_select_value}</option>
				{#each Object.entries(Samples) as [sample_name, sample_description]}
					<option value={sample_name}>{sample_name}</option>
				{/each}
			</select>
			<textarea bind:value={input_description_value} />
			<button on:click={handle_load_description} disabled={running}>Load</button>
		</div>
		<div class="speed-container">
			<label for="speed">speed</label>
			<input type="range" name="speed" bind:value={$SpeedStore} min="10" max="3000" step="10" disabled={running} />
			<p>{$SpeedStore} ms</p>
		</div>
		<input type="submit" on:click|preventDefault={handle_start} value="Start" disabled={running}/>
	</form>
</section>
<section>
	<h2>Strip</h2>
	<ol>
		{#each $StripStore.cells as strip, index}
			<li style={`background-color: ${index === $StripStore.index ? 'red' : 'white'}`}>{strip.value}</li>
		{/each}
	</ol>
	<button on:click={handle_stop} disabled={!running}>Stop</button>
</section>
<section>
	<h2>Ouput</h2>
	<p>canvas</p>
</section>

<!-- ================================================ STYLE -->
<style>
	section,
	form {
		width: 100%;
        text-align: center;
	}

	form .description-container {
		display: flex;
		flex-direction: column;
	}

	form textarea {
		width: 100%;
		height: 200px;
		resize: none;
	}

    form .speed-container {
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

	ol {
		display: flex;
	}

	ol > li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		background: grey;
		border: solid 1px black;
	}

	.description-container > button {
		margin: 10px auto;
	}

	.description-container > select {
		margin: 10px auto;
	}
</style>
