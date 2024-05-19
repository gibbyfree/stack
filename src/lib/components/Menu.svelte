<script>
    import { createEventDispatcher } from 'svelte';

    let mode = "manual"; // or 'random'
    const dispatch = createEventDispatcher();

    $: {
        dispatch("update", { mode });
    }

    function toggleMode() {
        mode = mode === "manual" ? "random" : "manual";
    }
</script>

<div class="button-container">
    <button on:click={toggleMode} class="menu-item">
        {mode === "manual" ? "Random Mode" : "Manual Mode"}
    </button>
    <button class="menu-item">Controls</button>
    <button class="menu-item">Reset</button>
</div>

<style>
    div {
        margin: 10px 0;
    }
    button {
        margin-right: 5px;
    }
    .button-container {
        display: flex;
        flex-direction: row;
    }
    .menu-item {
        flex: 1;
    }
</style>
