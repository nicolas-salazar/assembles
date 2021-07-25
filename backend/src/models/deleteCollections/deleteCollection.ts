import { firestore } from 'firebase-admin';
import deleteQueryBatch from './deleteQueryBatch';

const firestoreDB = firestore();

const deleteCollection = async (collectionPath: string) => {
  try {
    const batchSize = 100;
    const collectionRef = firestoreDB.collection(collectionPath);
    const query = collectionRef.orderBy('__name__').limit(batchSize);

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

export default deleteCollection;
