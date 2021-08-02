import * as admin from 'firebase-admin';
import serviceAccount from './firebase/serviceAccount/serviceAccount';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import { deleteCollection, setProductsMocks } from './functions';

exports.setProductMocks = setProductsMocks;
exports.deleteCollection = deleteCollection;
