import React, { FunctionComponent, useState } from 'react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addMove as addMoveAction } from '../store/game/actions';
import { Field, Position } from './def';
import { getSVGPosition } from './util';
import { getCurrentField, getPossibleMoveFields } from '../store/game/selectors';

interface Props {
  position: Position;
  current: Field;
  addMove: (field: Field) => void;
  field: Field;
  isValidMove: boolean;
}

const Dot: FunctionComponent<Props> = ({ position: { x, y }, current, addMove, field, isValidMove }: Props) => {
  const [hover, setHover] = useState(false);
  const isCurrent = current.position.x === x && current.position.y === y;
  const { x: svgX, y: svgY } = getSVGPosition({ x, y });
  const { x: svgCX, y: svgCY } = getSVGPosition(current.position);
  return (
    <>
      {isValidMove && (
        <circle
          onClick={() => {
            setHover(false);
            addMove(field);
          }}
          r="4"
          fill="transparent"
          cx={svgX}
          cy={svgY}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      )}
      <circle
        pointerEvents="none"
        cx={svgX}
        cy={svgY}
        r={hover || isCurrent ? '2' : '0.5'}
        fill={isCurrent ? 'red' : 'white'}
      />
      {hover && isValidMove && <line pointerEvents="none" x1={svgCX} y1={svgCY} x2={svgX} y2={svgY} stroke="pink" />}
    </>
  );
};

const mapStateToProps = ({ game }: Store, props: Props) => ({
  current: getCurrentField(game),
  isValidMove: getPossibleMoveFields(game).includes(props.field)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMove: (field: Field) => dispatch(addMoveAction(field))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dot);
