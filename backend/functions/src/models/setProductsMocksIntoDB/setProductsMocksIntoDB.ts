import { firestore } from 'firebase-admin';
import { COLLECTIONS } from '../../constants';
import getProductMock from './getProductMock';

const firestoreDB = firestore();

const setProductsMocksIntoDB = async (quantity?: number) => {
  try {
    const mocks = getProductMock(quantity);
    const creationPromise: Array<any> = [];
    mocks.forEach((mockItem) => {
      creationPromise.push(firestoreDB.collection(COLLECTIONS.Products).doc().set(mockItem));
    });
    await Promise.all(creationPromise);
    return;
  } catch (error) {
    throw {
      code: error.code || 'unknown',
      message: error.message || 'Create product query failed',
    };
  }
};

export default setProductsMocksIntoDB;
