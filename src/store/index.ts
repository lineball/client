import {
  combineReducers,
  createStore,
  Store as ReduxStore,
  Action as ReduxAction
} from 'redux';
import game, { Edge } from './game/reducers';

import { devToolsEnhancer } from 'redux-devtools-extension';
import { BoardSize } from '../game/Board';
import { Position } from '../game/Dot';
export interface GameContextInterface {
  nodes: Array<Node>;
  edges: Array<Edge>;
  size: BoardSize;
  addEdge: (position: Position) => void;
  position: Position;
}
export interface Store extends ReduxStore {
  game: GameContextInterface;
}

export interface Action extends ReduxAction {
  type: String;
  payload: any;
}

const reducers = combineReducers({
  game
});

const store: Store = createStore(reducers, devToolsEnhancer({}));

export default store;
