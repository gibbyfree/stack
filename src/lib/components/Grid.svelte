<script>
    import { pieces } from "../index";
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

    let grid = Array(20)
        .fill()
        .map(() => Array(10).fill({ filled: false, color: null }));

    $: gridStyle = `
        display: grid;
        grid-template-columns: repeat(10, 30px);
        grid-template-rows: repeat(20, 30px);
        gap: 2px;
        margin-top: 20px;
    `;
</script>

<div bind:this={gridEl} style={gridStyle} on:drop={handleDrop}>
    {#each grid as row, i}
        {#each row as cell, j}
            <div
                class="cell"
                style={`border: 0.8px solid black; background-color: ${cell.filled ? cell.color : "white"}`}
            ></div>
        {/each}
    {/each}
</div>

<style>
    div {
        position: relative;
    }
    .cell {
        width: 30px;
        height: 30px;
    }
</style>
