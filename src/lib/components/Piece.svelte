<script lang="ts">
    import type { Piece } from "../types.ts";

    export let selectedPiece;
</script>

<div class="piece">
    {#each selectedPiece.shape as row}
        {#each row as cell}
            <div class={cell ? "cell active" : "cell"}></div>
        {/each}
    {/each}
</div>

<style>
    .piece {
        display: grid;
        grid-template-columns: repeat(4, 30px);
    }

    .cell {
        width: 30px;
        height: 30px;
    }

    .active {
        background: blue;
    }
</style>
