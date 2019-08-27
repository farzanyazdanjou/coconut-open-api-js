export default {
  create: jest.fn(() => ({
    defaults: {
      headers: {
        common: {},
      },
    },
  })),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
  get: jest.fn(() => Promise.resolve({ data: {} })),
  patch: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
