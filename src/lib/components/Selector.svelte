<script>
    import { onMount } from "svelte";
    import { pieces } from "../index";
    import Piece from './Piece.svelte';
    export let mode, selectedPiece;

    onMount(() => {

    });
</script>

<div>
    {#if selectedPiece}
        <div class="piece-container">
            <p>Selected Piece: {selectedPiece.type}</p>
            <Piece piece={selectedPiece}/>
        </div>
    {/if}
</div>

<style>
    div {
        margin: 10px 0;
    }
    .piece-container {
        position: relative;
    }
</style>
