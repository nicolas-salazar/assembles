import * as functions from 'firebase-functions';
import { ERROR_HANDLE } from '../../constants';
import { deleteCollectionIntoDB } from '../../models';
import COLLECTION_WITH_MOCKS from '../../constants/collecitonsWithMock';
import { checkAdminDev } from '../utils';

enum RESPONSE_MESSAGE {
  Success = 'Mocks collection deleted sucesfuly!',
  Error = 'It was not possible to delete the mocks collection',
}

const deleteMocks = functions.https.onCall(async (data) => {
  try {
    const { key } = data;
    checkAdminDev(key);
    COLLECTION_WITH_MOCKS.forEach(async (collection) => {
      await deleteCollectionIntoDB(collection, { key: 'isMock', value: true });
    });
    return {
      message: RESPONSE_MESSAGE.Success,
    };
  } catch (error) {
    return ERROR_HANDLE.unknown(error, RESPONSE_MESSAGE.Error);
  }
});

export default deleteMocks;
