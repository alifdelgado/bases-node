import { httpClientPlugin } from '../../src/plugins/http-client.pugin';
describe('plugins/http-client.plugin.ts', () => {
  it('httpClientPlugin.get should return a object', async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    const data = await httpClientPlugin.get(url);
    expect(typeof data).toBe('object');
  });

  it('httpClientPlugin.get should return a pokemon data', async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    const { id, name } = await httpClientPlugin.get(url);
    expect(id).toBe(1);
    expect(name).toBe('bulbasaur');
  });

  it('httpClientPlugin post, put, delete should be methods', async () => {
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');
  });
});
