import checkAuth from '.';
import { ERROR_MESSAGES } from '../../../constants/errors/errors';

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
}));

describe('Utils - checkAuth', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = { ...OLD_ENV };
  });

  test('Without context and env is not develop', async () => {
    process.env.ENV = 'test';
    expect(() => checkAuth(null)).toThrow(ERROR_MESSAGES.UnAuth);
  });

  test('With context but without auth and env is not develop', async () => {
    const context = {};
    process.env.ENV = 'test';
    expect(() => checkAuth(context)).toThrow(ERROR_MESSAGES.UnAuth);
  });

  test('With complet context', async () => {
    const context = { auth: 1 };
    process.env.ENV = 'test';
    const result = await checkAuth(context);
    expect(result).toBeUndefined();
  });

  test('Without context and env is develop', async () => {
    process.env.ENV = 'develop';
    const result = await checkAuth(null);
    expect(result).toBeUndefined();
  });
});
