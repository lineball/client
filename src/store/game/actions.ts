import { Field } from '../../game/defs';
import { Action } from '../index';

export const REVERT_MOVE = '@lineball/REVERT_MOVE';
export const REVERT_TURN = '@lineball/REVERT_TURN';
export const ADD_MOVE = '@lineball/ADD_MOVE';
export const INIT = '@lineball/INIT';

export interface AddMoveAction extends Action {
  payload: Field;
}

export const addMove = (field: Field): AddMoveAction => {
  const payload: Field = field;
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
