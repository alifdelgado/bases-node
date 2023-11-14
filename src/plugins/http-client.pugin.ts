export const httpClientPlugin = {
  get: async (url: string) => {
    return await (await fetch(url)).json();
  },

  post: async (url: string, body: any) => {
    throw new Error('not implemented');
  },
  put: async (url: string, body: any) => {
    throw new Error('not implemented');
  },
  delete: async (url: string) => {
    throw new Error('not implemented');
  },
};
