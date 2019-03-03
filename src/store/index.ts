import { Action as ReduxAction, combineReducers, createStore, Store as ReduxStore } from 'redux';
import game, { GameState } from './game/reducers';

import { devToolsEnhancer } from 'redux-devtools-extension';

export interface Store extends ReduxStore {
  game: GameState;
}

export interface Action extends ReduxAction {
  type: string;
  payload: any;
}

const reducers = combineReducers({
  game
});

const store: Store = createStore(reducers, devToolsEnhancer({}));

export default store;
