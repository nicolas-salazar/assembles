/* eslint-disable no-throw-literal */
import { firestore } from 'firebase-admin';
import { COLLECTIONS, ERROR_HANDLE } from '../../constants';

enum RESPONSE_MESSAGE {
  Success = 'The product quantities was updated sucesfuly!',
  Error = 'It was not possible to update the product quantities',
}

const updateProductStockIntoDB = async ({
  id,
  available,
}: {
  id: string;
  available: number;
}): Promise<string | Error> => {
  const firestoreDB = firestore();
  try {
    const productRef = firestoreDB.collection(COLLECTIONS.Products).doc(id);
    const snapshot = await productRef.get();

    if (snapshot.data()?.childReference.length > 0) {
      throw {
        code: 'failed-precondition',
        message: 'The product can not be updated, this is an assemble parent',
      };
    }

    await productRef.set({ available }, { merge: true });

    return RESPONSE_MESSAGE.Success;
  } catch (error) {
    return ERROR_HANDLE.unknown(error, error.message || RESPONSE_MESSAGE.Error);
  }
};

export default updateProductStockIntoDB;
