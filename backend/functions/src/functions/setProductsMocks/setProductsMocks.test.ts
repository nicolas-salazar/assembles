/* eslint-disable import/newline-after-import */
import functions from 'firebase-functions-test';
import setProductMocks from '.';
const testFunction = functions();
const wrappedFunction = testFunction.wrap(setProductMocks);

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
}));

jest.mock('../../models/setProductsMocksIntoDB/setProductsMocksIntoDB');

describe('Functions - setProductMocks', () => {
  test('Without auth', async () => {
    const context = {};
    expect(() => wrappedFunction(null, context).toThrow());
  });

  test('With auth', async () => {
    const context = { auth: 1 };
    const data = {};
    const result = await wrappedFunction(data, context);
    expect(result).toEqual({ message: 'Mock created sucesfuly!' });
  });
});
