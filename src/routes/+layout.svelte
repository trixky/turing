<!-- ================================================ SCRIPT -->
<script lang="ts">
    import './global.css'
    import Footer from "$lib/components/layout/footer/Footer.svelte"
</script>

<!-- ================================================ CONTENT -->
<main>
    <slot />
</main>
<Footer />

<!-- ================================================ STYLE -->
<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: var(--global-width);
        margin: 0 auto;
        padding: var(--global-padding);
    }
</style>