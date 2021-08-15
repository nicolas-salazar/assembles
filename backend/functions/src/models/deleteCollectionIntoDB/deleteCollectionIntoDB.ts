/* eslint-disable no-throw-literal */
import { firestore } from 'firebase-admin';
import deleteQueryBatch from './deleteQueryBatch';

const deleteCollectionIntoDB = async (
  collectionPath: string,
  where?: { key: string; value: string | boolean | number },
): Promise<any> => {
  const firestoreDB = firestore();
  try {
    const batchSize = 100;
    const collectionRef = firestoreDB.collection(collectionPath);
    const query = where
      ? collectionRef.orderBy('__name__').where(where.key, '==', where.value).limit(batchSize)
      : collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
      deleteQueryBatch(query, resolve).catch(reject);
    });
  } catch (error) {
    throw {
      code: error.code || 'unknown',
      message: error.message || 'Delete collection query failed',
    };
  }
};

export default deleteCollectionIntoDB;
