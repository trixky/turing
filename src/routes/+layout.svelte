<!-- ================================================ SCRIPT -->
<script lang="ts">
    import './global.css'
</script>

<!-- ================================================ CONTENT -->
<main>
    <slot />
</main>

<!-- ================================================ STYLE -->
<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 600px;
        margin: 0 auto;
    }
</style>