import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addMove as addMoveAction, AddMoveAction } from '../store/game/actions';
import { Dot as TDot, Position } from './defs';
import { getSVGPosition } from './util';
import { getCurrentField, getPossibleMoveFields } from '../store/game/selectors';
import Line from './svg/Line';

interface ComponentProps {
  position: Position;
  field: TDot;
}

interface StateProps {
  isValidMove: boolean;
  current: TDot;
}

interface DispatchProps {
  addMove: (field: TDot) => void;
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
          onClick={(): void => {
            setHover(false);
            addMove(field);
          }}
          r="4"
          fill="transparent"
          cx={svgX}
          cy={svgY}
          onMouseEnter={(): void => setHover(true)}
          onMouseLeave={(): void => setHover(false)}
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

const mapStateToProps = ({ game }: Store, { field }: { field: TDot }): StateProps => ({
  current: getCurrentField(game),
  isValidMove: getPossibleMoveFields(game).includes(field)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addMove: (field: TDot): AddMoveAction => dispatch(addMoveAction(field))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dot);
