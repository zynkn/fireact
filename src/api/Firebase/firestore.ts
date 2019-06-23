import { fire } from 'fire';
import firebase from 'firebase';
import 'firebase/firestore';

fire();

const db = firebase.firestore();
const settings = {};
db.settings(settings);

export const getWorkout = async (payload: any) => {
  console.log(payload);
  const datas: any = await db.collection("workout").doc(payload.uid).collection("dates")
    .where("date", "==", payload.date).get().then((querySnapshot: any) => {
      let obj: any = {};
      querySnapshot.forEach((doc: any) => {
        let temp: any = doc.data();
        delete temp.date;
        obj = temp;
      });
      return obj;
    })
  console.log(datas);
  return datas;
}
export const getWorkouts = async (payload: any) => {
  console.log('Firestore >> getWorkouts');
  console.log(payload);
  const datas: any = await db.collection("workout").doc(payload.uid).collection("dates")
    .where("date", ">=", payload.start).where("date", "<=", payload.end)
    .orderBy("date", "asc").get().then((querySnapshot: any) => {
      //let map: any = new Map();
      let map: any = {};
      //let obj: any = {};
      querySnapshot.forEach((doc: any) => {
        //obj = {[doc.id]: doc.data()};
        let temp: any = doc.data();
        delete temp.date;
        map = { ...map, [doc.id]: temp }
        //map.set(doc.id, doc.data());
        // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
      //delete map.date;
      console.log(map);
      return map;
    });
  //console.log(datas);
  return datas;
}

export const setWorkout = (payload: any) => {
  console.log(payload);

  return db.collection("workout").doc(payload.uid).collection("dates").doc(payload.date)
    .set(
      {
        date: payload.date,
        [payload.workoutId]: {
          type: payload.type,
          name: payload.name,
          unit: 'kg',
          sets: payload.sets
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

