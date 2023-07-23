<!-- ================================================ SCRIPT -->
<script lang="ts">
    import Wikipedia from "./Wikipedia.svelte";
</script>
<!-- ================================================ CONTENT -->
<footer>
    <Wikipedia />
</footer>

<!-- ================================================ STYLE -->
<style>
    footer {
        border-top: solid 1px black;
        max-width: var(--global-width);
        margin: 0 auto;
        padding: var(--global-padding);
    }
</style>