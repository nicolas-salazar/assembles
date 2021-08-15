import * as functions from 'firebase-functions';
import { firestore } from 'firebase-admin';
import { COLLECTIONS } from '../../constants';

const firestoreDB = firestore();

const updateParentsStock = functions.firestore
  .document(`${COLLECTIONS.Products}/{docId}`)
  .onUpdate(async (_change, context) => {
    const snapshot = await firestoreDB
      .collection(COLLECTIONS.Products)
      .doc(context.params.docId)
      .get();
    const parentReference = snapshot.data()?.parentReference;
    parentReference.forEach(async (reference: firestore.DocumentReference) => {
      const quantities: number[] = [];
      const quantitiesPromises: Array<any> = [];
      const quantitiesPerReference: number[] = [];
      const parentSnapshot = await reference.get();
      const childReference = parentSnapshot.data()?.childReference;

      childReference.forEach((itemReference: any) => {
        quantitiesPromises.push(itemReference.reference.get());
        quantitiesPerReference.push(itemReference.quantity);
      });

      const snapshots = await Promise.all(quantitiesPromises);
      snapshots.forEach((result: any, index: number) => {
        quantities.push(Math.floor(result.data().available / quantitiesPerReference[index]));
      });

      const minimumQuantity = Math.min(...quantities);
      reference.set({ available: minimumQuantity }, { merge: true });
    });
  });

export default updateParentsStock;
