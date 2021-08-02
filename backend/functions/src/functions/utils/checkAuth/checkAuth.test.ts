import checkAuth from '.';
import * as admin from 'firebase-admin';
import { ERROR_MESSAGES } from '../../../constants/errors/errors';

describe('Test - checkAuth', () => {
  let adminStub: any = undefined;
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  beforeAll(() => {
    adminStub = jest.spyOn(admin, 'initializeApp');
  });

  afterAll(() => {
    adminStub.mockRestore();
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
