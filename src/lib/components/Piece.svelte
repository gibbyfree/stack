<script>
    export let piece;
  </script>
  
  <div style="position: absolute; top: {piece.y}px; left: {piece.x}px;">
    {#each piece.shape as row}
      {#each row as cell}
        <div style="width: 30px; height: 30px; background: {cell ? 'blue' : 'transparent'};"></div>
      {/each}
    {/each}
  </div>
  
  <style>
    div {
      display: grid;
      grid-template-columns: repeat(4, 30px);
    }
  </style>