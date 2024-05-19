<script>
    import Grid from "../lib/components/Grid.svelte";
    import Toolbar from "../lib/components/Toolbar.svelte";
    import Selector from "../lib/components/Selector.svelte";
    import Menu from "$lib/components/Menu.svelte";
    let mode = "manual"; // or 'random'

    let selectedPiece = null;

    function selectPiece(piece) {
        selectedPiece = piece;
    }

    const updateMode = (event) => {
        mode = event.detail.mode;
    };
</script>

<main>
    <div class="container">
        <div class="sidebar">
            <div class="selector">
                <Selector {mode} {selectedPiece} />
            </div>
            <div class="queue"><Toolbar {mode} {selectPiece} /></div>
            <div class="menu">
                <Menu bind:mode on:update={updateMode} />
            </div>
        </div>
        <div class="grid">
            <Grid {mode} />
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        height: 100vh;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
    }
    .container {
        display: flex;
        flex-direction: row;
        width: 80%;
        height: 80%;
        gap: 10px;
    }
    .sidebar {
        display: flex;
        flex-direction: column;
        width: 30%;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
    }
    .queue {
        height: 50%;
        align-self: center;
        margin-bottom: 20px;
    }
    .selector {
        flex-grow: 1;
        align-self: center;
    }
    .menu {
        display: flex;
        flex-direction: row;
        gap: 10px;
        height: 10%;
    }
    .grid {
        flex-grow: 1;
    }
</style>
