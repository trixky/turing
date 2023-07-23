<!-- ================================================ SCRIPT -->

<!-- ================================================ CONTENT -->
<section class="description-container">
	<h2>Description</h2>
	<ul>
		<li>
			<p><b>name</b>: The name of the described machine.</p>
		</li>
		<li>
			<p>
				<b>alphabet</b>: Both input and work alphabet of the machine merged into a single alphabet
				for simplicity’s sake, including the blank character. Each character of the alphabet must be
				a string of length strictly equal to 1.
			</p>
		</li>
		<li>
			<p><b>blank</b>: The blank character, must be part of the alphabet.</p>
		</li>
		<li>
			<p><b>states</b>: The exhaustive list of the machine’s states names.</p>
		</li>
		<li>
			<p><b>initial</b>: The initial state of the machine, must be part of the states list.</p>
		</li>
		<li>
			<p>
				<b>finals</b>: The sub-list from states of the machine’s final states.
			</p>
		</li>
		<li>
			<p>
				<b>transitions</b>: A dictionnary of the machine’s transitions indexed by state name. Each
				transition is a list of dictionnaries, and each dictionnary describes the transition for a
				given character under the head of the machine.
			</p>
			<ul>
				<li>
					<p>
						<b>read</b>: The character of the machine’s alphabet on the tape under the machine’s
						head.
					</p>
				</li>
				<li>
					<p><b>to_state</b>: The new state of the machine after the transition is done.</p>
				</li>
				<li>
					<p>
						<b>write</b>: The character of the machine’s alphabet to write on the tape before moving
						the head.
					</p>
				</li>
				<li>
					<p><b>action</b>: Movement of the head for this transition, either LEFT, or RIGHT.</p>
				</li>
			</ul>
		</li>
	</ul>
    <p class="sneaky">The description use the <b>JSON</b> format</p>
</section>

<!-- ================================================ STYLE -->
<style>
	section,

    .description-container > p {
        float: right;
    }

	ul > li > p {
		margin: 0;
		padding: 0;
	}
</style>
