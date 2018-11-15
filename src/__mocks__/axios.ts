export default {
  create: jest.fn(() => Promise.resolve({})),
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
