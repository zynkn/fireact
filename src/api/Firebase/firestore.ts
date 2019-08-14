import { fire } from 'fire';
import firebase from 'firebase';
import 'firebase/firestore';

fire();

const db = firebase.firestore();
const settings = {};
db.settings(settings);

export const getAsyncToken = async (payload: any) => {
  const TOKEN: any = await db.collection('workout').doc(payload.uid).get().then((doc) => {
    if (doc.exists) {
      return doc.data()
    } else {
      return { 'ASYNC_TOKEN': null }
    }
  });
  return TOKEN;
}

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
      let map: any = {};
      querySnapshot.forEach((doc: any) => {
        let temp: any = doc.data();
        delete temp.date;
        map = { ...map, [doc.id]: temp }
      });
      console.log(map);
      return map;
    });
  return datas;
}
export const getAllWorkout = async (payload: any) => {
  //console.log('GET ALL');
  const datas: any = await db.collection("workout").doc(payload.uid).collection("dates")
    .get().then((querySnapshot: any) => {
      let obj: any = {};
      querySnapshot.forEach((doc: any) => {
        //console.log(doc.data());
        let temp = doc.data();
        let date = temp.date;
        delete temp.date;
        if (doc.exists) {
          obj[date] = temp;
        }
      })
      //console.log(obj);
      return obj;
    })
  return datas;
}

export const setWorkout = (payload: any) => {
  console.log(payload);
  const token = payload.token || payload.workoutId;
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
        db.collection("workout").doc(payload.uid).set({
          ASYNC_TOKEN: token
        }).then((res) => console.log('ASYNC_TOKEN IS INPUTTED.'));
        return res;
      })

}

export const removeWorkout = async (payload: any) => {


  const hasOne: any = await db.collection("workout").doc(payload.uid).collection('dates').doc(payload.date).get().then((res) => {
    return res.data();
  });
  if (Object.keys(hasOne[payload.workoutId].sets).length === 1) {
    await db.collection('workout').doc(payload.uid).collection('dates').doc(payload.date).update({
      [payload.workoutId]: firebase.firestore.FieldValue.delete()
    }).then((res) => {
      return db.collection("workout").doc(payload.uid).set({
        ASYNC_TOKEN: payload.token
      }).then((res) => ('ASYNC_TOKEN IS INPUTTED.'));
    })
  } else {
    await db.collection('workout').doc(payload.uid).collection('dates').doc(payload.date).update({
      [payload.workoutId + '.sets.' + payload.timestamp]: firebase.firestore.FieldValue.delete()

    }).then((res) => {
      return db.collection("workout").doc(payload.uid).set({
        ASYNC_TOKEN: payload.token
      }).then((res) => ('ASYNC_TOKEN IS INPUTTED.'));
    })
  }

  // const hasOne: any = await db.collection("workout").doc(payload.uid).get().then((res) => {
  //   return res.data();
  // })
  // console.log('REMOVE WORKOUT', hasOne);
  // if (Object.keys(hasOne[payload.date][payload.workoutId].sets).length > 1) {
  //   const res = await db.collection("workout").doc(payload.uid).update({
  //     [payload.date + "." + payload.workoutId + ".sets." + payload.timestamp]: firebase.firestore.FieldValue.delete()
  //   }).then((res) => {
  //     return db.collection("workout").doc(payload.uid).set({
  //       ASYNC_TOKEN: payload.token
  //     }).then((res) => ('ASYNC_TOKEN IS INPUTTED.'));
  //   })
  // } else {
  //   const res = await db.collection("workout").doc(payload.uid).update({
  //     [payload.date + '.' + payload.workoutId]: firebase.firestore.FieldValue.delete()
  //   }).then((res) => {
  //     return db.collection("workout").doc(payload.uid).set({
  //       ASYNC_TOKEN: payload.token
  //     }).then((res) => ('ASYNC_TOKEN IS INPUTTED.'));
  //   })
  // }

}

