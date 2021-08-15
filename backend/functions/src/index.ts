/* eslint-disable object-curly-newline */
/* eslint-disable import/first */
import * as admin from 'firebase-admin';
import serviceAccount from './firebase/serviceAccount/serviceAccount';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import { updateParentsStock } from './triggers';
import { deleteCollection, setProductsMocks, updateProductStock, deleteMocks } from './functions';

// Mocks Utils
exports.deleteMocks = deleteMocks;
exports.setProductMocks = setProductsMocks;

// Data Managements
exports.deleteCollection = deleteCollection;
exports.updateProductStock = updateProductStock;

// Triggers
exports.updateParentsStock = updateParentsStock;
