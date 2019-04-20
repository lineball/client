import React, { ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Store } from '../store';
import { Dot as TDot, Move, Path, Player, Turn } from './defs';
import { getKeyFromPath } from './util';
import { getCurrentTurn, getMoves } from '../store/game/selectors';
import Line from './svg/Line';
import Dot from './Dot';

interface StateProps {
  dots: TDot[];
  moves: Move[];
  paths: Path[];
  currentTurn: Turn;
}

type Props = StateProps;

const Board = (props: Props): ReactElement => {
  const { dots, moves, paths, currentTurn } = props;
  return (
    <svg width={400} height={400} viewBox={`0 0 400 400`}>
      {paths.map(
        (path): ReactNode => (
          <Line key={getKeyFromPath(path)} path={path} color={currentTurn.player === Player.WHITE ? 'blue' : 'red'} />
        )
      )}
      {/*{moves.map(*/}
      {/*({ path }): ReactNode => (*/}
      {/*<Line key={getKeyFromPath(path)} path={path} />*/}
      {/*)*/}
      {/*)}*/}
      {/*{dots.map(*/}
      {/*(field): ReactNode => (*/}
      {/*<Dot {...field} key={`${field.position.x}_${field.position.y}`} field={field} />*/}
      {/*)*/}
      {/*)}*/}
    </svg>
  );
};

const mapStateToProps = ({ game }: Store): StateProps => {
  const { dots, paths } = game;
  return {
    dots,
    moves: getMoves(game),
    paths,
    currentTurn: getCurrentTurn(game)
  };
};

export default connect(mapStateToProps)(Board);
