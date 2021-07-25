import * as admin from 'firebase-admin';
import serviceAccount from './firebase/serviceAccount/serviceAccount';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import { setAllMocks, deleteMocks } from './mocks';

exports.setAllMocks = setAllMocks;
exports.deleteMocks = deleteMocks;
