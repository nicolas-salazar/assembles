import { checkAuth } from '../utils';
import { ERROR_HANDLE } from '../../constants';
import * as functions from 'firebase-functions';
import { IDeleteCollection } from '../../interfaces';
import { deleteCollectionIntoDB } from '../../models';

enum RESPONSE_MESSAGE {
  Success = 'Collection deleted sucesfuly!',
  Error = 'It was not possible to delete the collection',
}

const deleteCollection = functions.https.onCall(async (data: IDeleteCollection, context) => {
  try {
    checkAuth(context);
    const { collection } = data;
    await deleteCollectionIntoDB(collection);
    return {
      message: RESPONSE_MESSAGE.Success,
    };
  } catch (error) {
    return ERROR_HANDLE.unknown(error, RESPONSE_MESSAGE.Error);
  }
});

export default deleteCollection;
