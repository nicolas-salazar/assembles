import * as admin from 'firebase-admin';
import serviceAccount from './firebase/serviceAccount/serviceAccount';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import { deleteCollection, setProductsMocks } from './functions';
import deleteMocks from './functions/deleteMocks';

// Mocks Utils
exports.deleteMocks = deleteMocks;
exports.setProductMocks = setProductsMocks;

// Data Managements
exports.deleteCollection = deleteCollection;
