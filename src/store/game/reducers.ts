import { ADD_EDGE, INITIALIZE_BOARD } from './actions';
import { BoardSize } from '../../game/Board';
import { flatMap, range } from 'lodash';
import { Action } from '../index';

interface GameContext {
  nodes: Array<Node>;
  edges: Array<Edge>;
  size: BoardSize;
}

interface Position {
  x: number;
  y: number;
}

class Node {
  position: Position;

  constructor({ position }: any) {
    this.position = position;
  }
}

export class Edge {
  position: [Position, Position];
  constructor(position: [Position, Position]) {
    this.position = position;
  }
}

const initialState = {
  nodes: flatMap([
    ...[0, 12].map(y =>
      range(3, 6).map(x => new Node({ position: { x: x * 10 + 5, y: y * 10 } }))
    ),
    ...range(1, 12).map(y =>
      range(0, 9).map(x => new Node({ position: { x: x * 10 + 5, y: y * 10 } }))
    )
  ]),
  edges: [],
  size: {
    x: 9,
    y: 12
  },
  position: {
    x: 4 * 10 + 5,
    y: 6 * 10
  }
};

export default (state: GameContext = initialState, action: Action) => {
  switch (action.type) {
    case INITIALIZE_BOARD: {
      return initialState;
    }
    case ADD_EDGE: {
      const { payload: edge } = action;
      return {
        ...state,
        edges: [...state.edges, edge],
        position: { ...edge.position[1] }
      };
    }
    default: {
      return state;
    }
  }
};
