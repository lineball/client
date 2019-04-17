import { initializeDots } from './init';
import { DefaultFieldConfig } from './init';

describe('dots initialization', () => {
  it('creates dots for default config', () => {
    const { inner, goal } = DefaultFieldConfig;
    const dots = initializeDots();
    expect(dots.length).toBe((inner.height + 1) * (inner.width + 1) + (goal.width + 1) * (goal.height + 1));
    console.error(dots.filter(x => x.border));
    expect(dots.filter(x => x.border).length).toBe((inner.height + goal.height + 1) * 2 + inner.width * 2);
  });
});
