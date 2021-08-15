import * as functions from 'firebase-functions';
import { checkAuth } from '../utils';
import { ERROR_HANDLE } from '../../constants';
import { updateProductStockIntoDB } from '../../models';

enum RESPONSE_MESSAGE {
  Success = 'The product quantities was updated sucesfuly!',
  Error = 'It was not possible to update the product quantities',
}

const updateProductStock = functions.https.onCall(async (data, context) => {
  try {
    checkAuth(context);
    await updateProductStockIntoDB(data);
    return {
      message: RESPONSE_MESSAGE.Success,
    };
  } catch (error) {
    return ERROR_HANDLE.unknown(error, RESPONSE_MESSAGE.Error);
  }
});

export default updateProductStock;
