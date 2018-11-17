export default {
  create: jest.fn(() => Promise.resolve({})),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
