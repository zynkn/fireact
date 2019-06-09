import { fire } from 'fire';
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';
fire();

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

export const setWorkout = (payload: any) => {
  //console.log(payload);
  return db.collection("workout").doc(payload.uid).collection(payload.date).doc(payload.timestamp + '').set({
    type: payload.type,
    name: payload.name,
    unit: 'kg',
    sets: payload.sets
  }, { merge: true }).then((res: any) => {
    //console.log(res);
    return res;
  }).catch((error: any) => {
    console.log(error);
    return error;
  })
}