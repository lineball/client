// Lineball - (domain) game interfaces definition

import { GoalType } from '../store/game/init';

export interface Size {
  x: number;
  y: number;
}

export type Path = [Dot, Dot];

export interface Position {
  x: number;
  y: number;
}

export interface Dot {
  position: Position;
  border: boolean;
  goal: GoalType;
}

export enum Player {
  WHITE = 'WHITE',
  BLACK = 'BLACK'
}

export interface Move {
  path: Path;
  direction: 0 | 1;
}

export interface Turn {
  player: Player;
  moves: Move[];
}
