<script>
    import { pieces, grid } from "../index";
    import Piece from "./Piece.svelte";
    import { onMount } from "svelte";


    export let mode;
    let gridEl;
    let selectedPiece = null;

    onMount(() => {
        if (mode === "random") {
            // Add logic for random piece generation
        }
        if (mode === "manual") {

        }
    });

    function handleDrop(event) {
        // Handle piece drop logic
    }

    let gridValue;
    grid.subscribe((value) => {
        gridValue = value;
    });

    $: gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${gridValue.length}, 30px)`,
        gap: "2px",
    };
</script>

<div bind:this={gridEl} style={gridStyle} on:drop={handleDrop}>

</div>

<style>
    div {
        position: relative;
    }
</style>
