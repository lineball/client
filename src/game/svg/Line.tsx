import React, { FunctionComponent, memo, ReactElement, useMemo } from 'react';
import { Path } from '../def';
import { getSVGPosition } from '../util';

interface Props {
  color?: string;
  path: Path;
}

const Line: FunctionComponent<Props> = ({ color = 'white', path }: Props): ReactElement => {
  const { x: x1, y: y1 } = useMemo(() => getSVGPosition(path[0].position), path);
  const { x: x2, y: y2 } = useMemo(() => getSVGPosition(path[1].position), path);
  return <line pointerEvents="none" x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} />;
};

export default memo(Line);
