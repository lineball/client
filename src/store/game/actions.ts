import { Field } from '../../game/def';
export const REVERT_MOVE = '@lineball/REVERT_MOVE';
export const REVERT_TURN = '@lineball/REVERT_TURN';
export const ADD_MOVE = '@lineball/ADD_MOVE';

export const addMove = (field: Field) => ({
  type: ADD_MOVE,
  payload: field
});

export const revertMove = () => ({
  type: REVERT_MOVE
});

export const revertTurn = () => ({
  type: REVERT_TURN
});
