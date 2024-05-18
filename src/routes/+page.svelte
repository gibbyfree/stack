<script>
    import Grid from "../lib/components/Grid.svelte";
    import Toolbar from "../lib/components/Toolbar.svelte";
    import Selector from "../lib/components/Selector.svelte";
    let mode = "manual"; // or 'random'

    let selectedPiece = null;

    function selectPiece(piece) {
        selectedPiece = piece;
    }
</script>

<main>
    <Toolbar bind:mode {selectPiece} />
    <Selector {mode} {selectedPiece} />
    <Grid {mode} />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
