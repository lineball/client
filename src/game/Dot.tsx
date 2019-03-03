import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addMove as addMoveAction } from '../store/game/actions';
import { Field, Position } from './def';
import { getSVGPosition } from './util';
import { getCurrentField, getPossibleMoveFields } from '../store/game/selectors';
import Line from './svg/Line';

interface ComponentProps {
  position: Position;
  field: Field;
}

interface StateProps {
  isValidMove: boolean;
  current: Field;
}

interface DispatchProps {
  addMove: (field: Field) => void;
}

type Props = ComponentProps & StateProps & DispatchProps;

const Dot: FunctionComponent<Props> = ({
  position: { x, y },
  current,
  addMove,
  field,
  isValidMove
}: Props): ReactElement => {
  const [hover, setHover] = useState(false);
  const isCurrent = current === field;
  const { x: svgX, y: svgY } = getSVGPosition({ x, y });
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
      {hover && isValidMove && <Line path={[current, field]} />}
    </>
  );
};

const mapStateToProps = ({ game }: Store, { field }: { field: Field }): StateProps => ({
  current: getCurrentField(game),
  isValidMove: getPossibleMoveFields(game).includes(field)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addMove: (field: Field) => dispatch(addMoveAction(field))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dot);
