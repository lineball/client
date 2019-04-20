import { testOnly } from './init';

const { initFields, initBordersAndPaths } = testOnly;
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

describe('Field initialization tests', () => {
  it('snapshot tests', () => {
    expect(initFields()).toMatchSnapshot();
  });
});

describe('Paths and borders initialization tests', () => {
  const fields = initFields();
  const [borders, paths] = initBordersAndPaths(fields);

  it('snapshot tests', () => {
    expect(borders).toMatchSnapshot();
    expect(borders).toHaveLength(40);
    expect(paths).toMatchSnapshot();
    expect(paths).toHaveLength(316);
  });

  it('center field should have 8 paths', () => {
    const centerField = fields.find(f => f.name === 'G4');
    expect(centerField).toBeDefined();
    if (!centerField) return;
    expect(centerField.position.x).toBe(4);
    expect(centerField.position.y).toBe(6);
    expect(paths.filter(f => f.includes(centerField))).toHaveLength(8);
  });
});
