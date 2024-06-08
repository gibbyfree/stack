<script lang="ts">
    import { onMount } from "svelte";
    import { pieceConfig } from "../index";
    import Piece from "./Piece.svelte";
    export let mode: String, selectedPiece: Piece;

    // onMount(() => {});
</script>

<div>
    <div class="piece-container">
        <Piece {selectedPiece} />
    </div>
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
