import { fire } from 'fire';
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';
fire();

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

export const setWorkout = (payload: any) => {
  console.log(payload);
  return db.collection("workout").doc(payload.uid)
    .collection(payload.date).doc(payload.workoutId + '')
    .set({
      type: payload.type,
      name: payload.name,
      unit: 'kg',
      sets: payload.sets
    }, { merge: true }).then((res: any) => {
      console.log(res);
      return res;
    }).catch((error: any) => {
      console.log(error);
      return error;
    })
}

export const removeWorkout = async (payload: any) => {
  console.log(payload);
  const hasOne: any = await db.collection("workout").doc(payload.uid)
    .collection(payload.date).doc(payload.workoutId + '')
    .get().then((res) => {
      console.log(res.data());
      return res.data();
    });

  if (Object.keys(hasOne.sets).length > 1) {
    db.collection("workout").doc(payload.uid)
      .collection(payload.date).doc(payload.workoutId + '').update({
        ["sets." + payload.timestamp]: firebase.firestore.FieldValue.delete()
      })
  } else {
    db.collection("workout").doc(payload.uid)
      .collection(payload.date).doc(payload.workoutId + '').delete().then((res) => {
        console.log(res);
      })
  }

}