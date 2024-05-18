<script>
    import { pieces } from '../index';
    import { createEventDispatcher } from 'svelte';
    export let mode, selectPiece;
    
  </script>
  
  <div>
    <button on:click={() => mode = 'manual'}>Manual Mode</button>
    <button on:click={() => mode = 'random'}>Random Mode</button>
  </div>
  
  {#if mode === 'manual'}
    <div>
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
  </style>
  