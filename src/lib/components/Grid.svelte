<script lang="ts">
    import { Filled, type Cell } from "$lib/types";
    import { pieceConfig } from "../index";
    import Piece from "./Piece.svelte";
    import { onMount, tick } from "svelte";

    export let mode, selectedPiece;

    let grid = Array(20)
        .fill(null)
        .map(() => Array(10).fill({ color: "white", filled: false }));

    // Fill grid with ghost of selected piece
    $: if (selectedPiece) {
        // Clear the old ghost piece
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j].fill === Filled.GHOST) {
                    grid[i][j] = { color: "white", fill: Filled.EMPTY };
                }
            }
        }

        const ghostPiece = { ...selectedPiece, color: "rgba(0, 0, 0, 0.5)" }; // Assuming the ghost piece is semi-transparent black

        // Calculate the starting position for the piece
        const startRow = grid.length; // last row of the grid
        const startCol =
            Math.floor(grid[0].length / 2) -
            Math.floor(ghostPiece.shape[0].length / 2); // middle of the grid

        // Render the piece on the grid
        for (let i = ghostPiece.shape.length - 1; i >= 0; i--) {
            for (let j = 0; j < ghostPiece.shape[i].length; j++) {
                if (ghostPiece.shape[i][j] === 1) {
                    grid[startRow - i][startCol + j] = { color: ghostPiece.color, fill: Filled.GHOST };
                }
            }
        }
        tick();
    }

    $: gridStyle = `
        display: grid;
        grid-template-columns: repeat(10, 30px);
        grid-template-rows: repeat(20, 30px);
        gap: 2px;
        margin-top: 20px;
    `;
</script>

<div style={gridStyle}>
    {#each grid as row, i}
        {#each row as cell, j}
            <div
                class="cell"
                style={`border: 0.8px solid black; background-color: ${cell.fill === Filled.FILLED || cell.fill === Filled.GHOST ? cell.color : "white"}`}
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
