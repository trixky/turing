<!-- ================================================ SCRIPT -->
<script lang="ts">
	import SpeedStore from '$lib/stores/speed';
	import StripStore from '$lib/stores/strip';
    import DescriptionStore from '$lib/stores/description';
    import StateStore from '$lib/stores/state';

    let input_description_value = ""

    function handle_load_description() {
        try {
            DescriptionStore.load(input_description_value)
        } catch (error) {
            alert(error)
        }
        StripStore.init($DescriptionStore.blank)
        StateStore.set($DescriptionStore.initial)
    }
</script>

<!-- ================================================ CONTENT -->

<h1>Turing</h1>

<p>
	Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda modi adipisci
	eaque rerum, dolore reprehenderit, veritatis velit illum deleniti labore placeat vel ipsam
	dolorum. Ut aut fuga magni. Ab?
</p>

<section>
	<form>
		<div class="description-container">
			<textarea bind:value={input_description_value}/>
            <button on:click={handle_load_description}>Load</button>
		</div>
		<div>
			<label for="speed">speed</label>
			<input type="range" name="speed" bind:value={$SpeedStore} min="10" max="3000" step="10" />
			<p>{$SpeedStore} ms</p>
		</div>
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
    section, form {
        width: 100%;
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

	ol {
		display: flex;
	}

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		background: grey;
		border: solid 1px black;
	}
</style>
