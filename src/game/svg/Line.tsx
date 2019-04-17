import React, { memo, ReactElement, useMemo } from 'react';
import { Path, Position } from '../defs';
import { getSVGPosition } from '../util';

type Props = {
  color?: string;
  path: Path;
};

const Line = ({ color = 'white', path }: Props): ReactElement => {
  const { x: x1, y: y1 } = useMemo((): Position => getSVGPosition(path[0].position), path);
  const { x: x2, y: y2 } = useMemo((): Position => getSVGPosition(path[1].position), path);
  return <line pointerEvents="none" x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} />;
};

export default memo(Line);
