import React, { FunctionComponent, ReactElement } from 'react';
import Dot from './Dot';
import { connect } from 'react-redux';
import { Store } from '../store';
import { Field, Move, Path, Player, Size, Turn } from './def';
import { getKeyFromPath } from './util';
import { getCurrentTurn, getMoves } from '../store/game/selectors';
import Line from './svg/Line';

interface StateProps {
  size: Size;
  fields: Field[];
  moves: Move[];
  borders: Path[];
  currentTurn: Turn;
}

type Props = StateProps;

const Board: FunctionComponent<Props> = (props: Props): ReactElement => {
  const {
    fields,
    moves,
    size: { x, y },
    borders,
    currentTurn
  } = props;
  return (
    <svg width={50 * x} height={50 * (y + 1)} viewBox={`0 0 ${10 * x} ${10 * y}`}>
      {borders.map(border => (
        <Line key={getKeyFromPath(border)} path={border} color={currentTurn.player === Player.WHITE ? 'blue' : 'red'} />
      ))}
      {moves.map(({ path }) => (
        <Line key={getKeyFromPath(path)} path={path} />
      ))}
      {fields.map(field => (
        <Dot {...field} key={`${field.position.x}_${field.position.y}`} field={field} />
      ))}
    </svg>
  );
};

const mapStateToProps = ({ game }: Store): StateProps => {
  const { fields, size, borders } = game;
  return {
    fields,
    moves: getMoves(game),
    size,
    borders,
    currentTurn: getCurrentTurn(game)
  };
};

export default connect(mapStateToProps)(Board);
