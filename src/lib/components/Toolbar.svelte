<script>
  import { pieces } from "../index";
  import { createEventDispatcher } from "svelte";
  export let mode, selectPiece;
</script>

{#if mode === "manual"}
  <div class="button-container">
    {#each $pieces as piece}
      <button on:click={() => selectPiece(piece)}>{piece.type}</button>
    {/each}
  </div>
{/if}

<style>
  div {
    margin: 10px 0;
  }
  button {
    margin-right: 5px;
  }
  .button-container {
    display: flex;
    flex-direction: column;
  }
</style>
