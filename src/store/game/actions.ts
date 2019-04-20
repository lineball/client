import { Dot } from '../../game/defs';
import { Action } from '../index';

export const REVERT_MOVE = '@lineball/REVERT_MOVE';
export const REVERT_TURN = '@lineball/REVERT_TURN';
export const ADD_MOVE = '@lineball/ADD_MOVE';
export const INIT = '@lineball/INIT';

export interface AddMoveAction extends Action {
  payload: Dot;
}

export const addMove = (field: Dot): AddMoveAction => {
  const payload: Dot = field;
  return {
    type: ADD_MOVE,
    payload
  };
};

export const revertMove = (): Action => ({
  type: REVERT_MOVE
});

export const init = (): Action => ({
  type: INIT
});

export const revertTurn = (): Action => ({
  type: REVERT_TURN
});
