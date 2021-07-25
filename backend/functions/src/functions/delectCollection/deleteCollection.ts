import { ENVIRONMENT } from '../../constants';
import * as functions from 'firebase-functions';
import { deleteCollectionIntoDB } from '../../models';

const deleteCollection = functions.https.onCall(async (data, context) => {
  if (process.env.ENV !== ENVIRONMENT.Develop) {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'Auth not found');
    }
  }

  try {
    const { collection } = data;
    await deleteCollectionIntoDB(collection);
    return {
      message: 'Mocks deleted sucesfuly!',
    };
  } catch (error) {
    throw new functions.https.HttpsError(
      error.code || 'unknown',
      error.message || 'It wasnt possible to create the mock'
    );
  }
});

export default deleteCollection;
