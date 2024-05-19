<script>
    export let piece;
</script>

<div class="piece" style="top: {piece.y}px; left: {piece.x}px;">
    {#each piece.shape as row}
        {#each row as cell}
            <div class={cell ? 'cell active' : 'cell'}></div>
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