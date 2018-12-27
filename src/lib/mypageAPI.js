import 'fire';
import * as firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

const ref = db.collection("users");

export const setUserInfo = ({ uid, data, flag }) => {
  if (flag === "height") {
    return ref.doc(uid).set({
      height: firebase.firestore.FieldValue.arrayUnion(data)
    }, { merge: true })
      .then((res) => {
        return res;
      })
  } else if (flag === "weight") {
    return ref.doc(uid).set({
      weight: firebase.firestore.FieldValue.arrayUnion(data)
    }, { merge: true })
      .then((res) => {
        return res;
      })
  } else {
    return ref.doc(uid).set({
      [flag]: data,
    }, { merge: true })
      .then((res) => {
        return res;
      })
  }
}

export const getUserInfo = async ({ uid }) => {
  var ans = {
    weight: [
      {
        data: '',
      }
    ],
    DOB: '',
    gender: '',
  };
  const query = ref.doc(uid);

  await query.get().then((doc) => {
    ans = { ...ans, ...doc.data() };
  }).catch((error) => {
    console.log(error);
    return error;
  })
  return ans;
}