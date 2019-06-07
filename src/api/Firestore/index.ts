import { fire } from 'fire';
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';
fire();
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

const ref = db.collection("workout");

export const setTest = () => {
  db.collection("workout").doc('USER_UID').collection('19-06-06').doc('WORKOUT_UID').set({
    type: 'biceps',
    name: 'Bench Press',
    unit: 'kg',
    sets: {
      timestamp: { weight: 10, reps: 10 }
    }
  }).then((res: any) => {
    return res;
  }).catch((error: any) => {
    return error;
  })

}
