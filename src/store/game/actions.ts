import { BoardSize } from '../../game/Board';
import { Edge } from './reducers';
export const INITIALIZE_BOARD = 'lineball@INITIALIZE_BOARD';
export const ADD_EDGE = 'lineball@ADD_EDGE';

export const initBoard = (size: BoardSize) => ({
  type: INITIALIZE_BOARD,
  payload: size
});

export const addEdge = (edge: Edge) => ({
  type: ADD_EDGE,
  payload: edge
});
