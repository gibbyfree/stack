export type Piece = {
    id: number;
    type: string;
    shape: number[][];
}

export type Cell = {
    color: string;
    fill: Filled;
}

export enum Filled {
    EMPTY = 0,
    FILLED = 1,
    GHOST = 2,
}