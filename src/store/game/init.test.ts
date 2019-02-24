import { _test_ } from './init';

const { initFields, initBordersAndPaths, initState } = _test_;

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
