import { firestore } from 'firebase-admin';
import { COLLECTIONS } from '../../constants';
import getProductMock from './getProductMock';

const setProductsMocksIntoDB = async (quantity?: number) => {
  const firestoreDB = firestore();
  try {
    const { parents, childs } = getProductMock(quantity);
    parents.forEach(async (parent, index) => {
      const childRef = firestoreDB.collection(COLLECTIONS.Products).doc();
      const parentRef = firestoreDB.collection(COLLECTIONS.Products).doc();

      await firestoreDB.runTransaction(async (transaction) => {
        await transaction.set(childRef, { ...childs[index], parentReference: [parentRef] });
        await transaction.set(parentRef, { ...parent, childReference: [childRef] });
      });
    });

    return;
  } catch (error) {
    throw {
      code: error.code || 'unknown',
      message: error.message || 'Create product query failed',
    };
  }
};

export default setProductsMocksIntoDB;
