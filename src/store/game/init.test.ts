import { DefaultFieldConfig, initializeDots } from './init';

describe('dots initialization', () => {
  it('creates dots for default config', () => {
    const { inner, goal } = DefaultFieldConfig;
    const dots = initializeDots();
    expect(dots.length).toBe((inner.height + 1) * (inner.width + 1) + (goal.width + 1) * (goal.height + 1));
    expect(dots.filter(x => x.border).length).toBe((inner.height + goal.height + 1) * 2 + inner.width * 2);
  });

  it('equals snapshot', () => {
    expect(initializeDots()).toMatchSnapshot();
  });

  it('center dot should exist with neighbours', () => {
    const dots = initializeDots();
    const centerField = dots.find(({ position: { x, y } }) => x === 0 && y === 0);
    expect(centerField).toBeDefined();
    if (!centerField) return;
    expect(dots.filter(({ position: { x, y } }) => [-1, 0, 1].includes(x) && [-1, 0, 1].includes(y))).toHaveLength(9);
  });
});
