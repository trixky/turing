<!-- ================================================ SCRIPT -->
<script lang="ts">
	import SpeedStore from '$lib/stores/speed';
	import StripStore from '$lib/stores/strip';
	import DescriptionStore from '$lib/stores/description';
	import StateStore from '$lib/stores/state';

	import DescriptionInformations from '$lib/components/DescriptionInformations.svelte';

	let input_description_value = '';

	function handle_load_description() {
		try {
			DescriptionStore.load(input_description_value);
		} catch (error) {
			alert(error);
		}
		StripStore.init($DescriptionStore.blank);
		StateStore.set($DescriptionStore.initial);
	}

	function handle_start() {
		alert('Start');
	}
</script>

<!-- ================================================ CONTENT -->

<h1>Turing</h1>

<DescriptionInformations />
<section>
	<form>
		<div class="description-container">
			<textarea bind:value={input_description_value} />
			<button on:click={handle_load_description}>Load</button>
		</div>
		<div class="speed-container">
			<label for="speed">speed</label>
			<input type="range" name="speed" bind:value={$SpeedStore} min="10" max="3000" step="10" />
			<p>{$SpeedStore} ms</p>
		</div>
		<input type="submit" on:click|preventDefault={handle_start} value="Start" />
	</form>
</section>
<section>
	<h2>Strip</h2>
	<ol>
		{#each $StripStore.cells as strip}
			<li>{strip.value}</li>
		{/each}
	</ol>
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
</style>
