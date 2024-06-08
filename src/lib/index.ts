// place files you want to import through the `$lib` alias in this folder.
import { writable } from 'svelte/store';

export const pieceConfig = [
    { id: 1, type: 'I', shape: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]] },
    { id: 2, type: 'O', shape: [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]] },
    { id: 3, type: 'T', shape: [[0, 0, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]] },
    { id: 4, type: 'S', shape: [[0, 0, 0, 0], [0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0]] },
    { id: 5, type: 'Z', shape: [[0, 0, 0, 0], [1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]] },
    { id: 6, type: 'J', shape: [[0, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0]] },
    { id: 7, type: 'L', shape: [[0, 0, 0, 0], [0, 0, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0]] },
];
