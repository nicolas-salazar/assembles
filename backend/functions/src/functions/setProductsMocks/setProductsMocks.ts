import * as functions from 'firebase-functions';
import { checkAuth } from '../utils';
import { ERROR_HANDLE } from '../../constants';
import { IProductMock } from '../../interfaces';
import { setProductsMocksIntoDB } from '../../models';

enum RESPONSE_MESSAGE {
  Success = 'Mock created sucesfuly!',
  Error = 'It was not possible to create the mock',
}

const setProductMocks = functions.https.onCall(async (data: IProductMock, context) => {
  try {
    checkAuth(context);
    const { quantity } = data;
    await setProductsMocksIntoDB(quantity);
    return {
      message: RESPONSE_MESSAGE.Success,
    };
  } catch (error) {
    return ERROR_HANDLE.unknown(error, RESPONSE_MESSAGE.Error);
  }
});

export default setProductMocks;
