import { characters } from '../../src/foundation/destructuring';

describe('foundation destructuring', () => {
  it('characters should contains Flash, Superman', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  });

  it('First character should be Flash, and second should be Superman', () => {
    const [flash, superman] = characters;
    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  });
});
