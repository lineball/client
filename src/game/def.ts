// Lineball - (domain) game interfaces definition

export interface Size {
  x: number;
  y: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Field {
  name: string;
  position: Position;
}

export type Path = [Field, Field];

export enum Player {
  WHITE,
  BLACK
}

export interface Move {
  path: Path;
  direction: 0 | 1;
}

export interface Turn {
  player: Player;
  moves: Move[];
}
