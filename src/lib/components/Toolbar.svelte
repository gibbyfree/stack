<script lang="ts">
  import type { Piece } from "../types";
  import { pieceConfig } from "../index";
  import { createEventDispatcher } from "svelte";
  export let mode;

  const dispatch = createEventDispatcher();

  function selectPiece(piece: Piece) {
    dispatch("update", piece);
  }
</script>

{#if mode === "manual"}
  <div class="button-container">
    {#each pieceConfig as piece}
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
