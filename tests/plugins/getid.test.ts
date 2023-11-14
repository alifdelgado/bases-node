import { getUUID } from '../../src/plugins/getId.plugin';

describe('plugins/getId-plugin', () => {
  it('getUUID should return a string', () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  });
});
