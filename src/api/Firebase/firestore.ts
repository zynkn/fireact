import { fire } from 'fire';
import firebase from 'firebase';
import 'firebase/firestore';

fire();

const db = firebase.firestore();
const settings = {};
db.settings(settings);

export const getWorkout = async (payload: any) => {
  console.log(payload);
  const datas: any = await db.collection("workout").doc(payload.uid).get().then((res) => {
    return res.data();
  });
  console.log(datas);
}
export const getWorkouts = async (payload: any) => {
  console.log(payload);
  const datas: any = await db.collection("workout").doc(payload.uid)
}

export const setWorkout = (payload: any) => {
  console.log(payload);

  return db.collection("workout").doc(payload.uid)
    .set(
      {
        [payload.date]: {
          [payload.workoutId]: {
            type: payload.type,
            name: payload.name,
            unit: 'kg',
            sets: payload.sets
          }
        }
      }
      , { merge: true }).then((res: any) => {
        console.log(res);
        return res;
      })

}

export const removeWorkout = async (payload: any) => {
  const hasOne: any = await db.collection("workout").doc(payload.uid).get().then((res) => {
    return res.data();
  })
  if (Object.keys(hasOne[payload.date][payload.workoutId].sets).length > 1) {
    db.collection("workout").doc(payload.uid).update({
      [payload.date + "." + payload.workoutId + ".sets." + payload.timestamp]: firebase.firestore.FieldValue.delete()
    })
  } else {
    db.collection("workout").doc(payload.uid).update({
      [payload.date + '.' + payload.workoutId]: firebase.firestore.FieldValue.delete()
    })
  }
}

