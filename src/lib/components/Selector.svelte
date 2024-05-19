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
            <Piece piece={selectedPiece}/>
        </div>
    {/if}
</div>

<style>
    div {
        margin: 10px;
    }
    .piece-container {
        display: flex;
        align-self: center;
        position: relative;
    }
</style>
