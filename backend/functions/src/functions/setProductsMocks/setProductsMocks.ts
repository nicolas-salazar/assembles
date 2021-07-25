import { ENVIRONMENT } from '../../constants';
import * as functions from 'firebase-functions';
import { setProductsMocksIntoDB } from '../../models';

const setProductMocks = functions.https.onCall(async (data, context) => {
  if (process.env.ENV !== ENVIRONMENT.Develop) {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'Auth not found');
    }
  }

  try {
    const { productMocks } = data;
    await setProductsMocksIntoDB(productMocks);
    return {
      message: 'Mock created sucesfuly!',
    };
  } catch (error) {
    throw new functions.https.HttpsError(
      error.code || 'unknown',
      error.message || 'It wasnt possible to create the mock'
    );
  }
});

export default setProductMocks;
