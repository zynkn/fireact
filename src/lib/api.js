import 'fire';
import * as firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const userRef = db.collection("users");

export const changeName = ({ date, name, id, uid }) =>
  db.collection("record").doc(uid + '').collection(date).doc(id).update({
    name: name
  })
    .then((res) => {
      console.log('Change Name Success!');
      return res;
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      return error;
    });

export const delRecord = ({ id, uid, date, detail, flag }) => delRecordAysnc(id, uid, date, detail, flag)

async function delRecordAysnc(id, uid, date, detail, flag) {
  const ref = db.collection("record").doc(uid).collection(date).doc(id)
  if (flag) {
    return ref.delete();
  } else {
    return ref.update({
      detail: firebase.firestore.FieldValue.arrayRemove(detail)
    })
  }
}

export const setRecord = ({ id, uid, date, name, detail }) => setRecordAsync(id, uid, date, name, detail)

async function setRecordAsync(id, uid, date, name, detail) {
  const ref = id === '' ?
    db.collection("record").doc(uid).collection(date).doc(detail.timestamp)
    :
    db.collection("record").doc(uid).collection(date).doc(id);
  ref.set({
    name: name,
    detail: firebase.firestore.FieldValue.arrayUnion(detail),
  }, { merge: true })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    })
}

export const getRecord = ({ date, uid }) => getRecordAsync(date, uid)

async function getRecordAsync(date, uid) {
  const ref = db.collection("record");
  const ans = {};
  ans['date'] = date;
  const arr = [];
  const query = ref.doc(uid + '').collection(date);
  await query.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let temp = doc.data();
      temp['id'] = doc.id;
      arr.push(temp);
    });
  }).catch((error) => {
    console.log(error);
    return error;
  })
  ans['data'] = arr;
  return ans;
}

export const setUserInfo = ({ uid, data, flag }) => setUserInfoAsync(uid, data, flag)

async function setUserInfoAsync(uid, data, flag) {
  const ref = db.collection("users");
  var ans = null;
  console.log(data);
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
export const setUserWeight = ({ uid, data, timestamp }) => setUserWeightAsync(uid, data, timestamp)

async function setUserWeightAsync(uid, data, timestamp) {
  return userRef.doc(uid).set({
    weight: firebase.firestore.FieldValue.arrayUnion({
      data: data,
      timestamp: timestamp
    })
  })
}
export const setUserHeight = ({ uid, data, timestamp }) => setUserHeightAsync(uid, data, timestamp)

async function setUserHeightAsync(uid, data, timestamp) {
  return userRef.doc(uid).set({
    height: firebase.firestore.FieldValue.arrayUnion({
      data: data,
      timestamp: timestamp
    })
  })
}

export const getUserInfo = ({ uid }) => getUserInfoAsync(uid)

async function getUserInfoAsync(uid) {
  const ref = db.collection("users");
  var ans = null;
  const query = ref.doc(uid);
  console.log(query);
  await query.get().then((doc) => {
    //console.log(doc.data());
    ans = doc.data();
  }).catch((error) => {
    console.log(error);
    return error;
  })
  return ans;
}






/*
** Below codes are untouchable.
*/

export const googleLogin = () =>
  //var data = null;
  firebase.auth().signInWithPopup(GoogleProvider).then((result) => {
    return result;
  }).catch(function (error) {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // The email of the user's account used.
    // var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // ...
    console.log(error);
    return error;
  });
export const googleLogout = () =>
  firebase.auth().signOut().then((result) => {
    // Sign-out successful.
    console.log('api/singout')
    console.log(result);
    return true;
  }).catch(function (error) {
    // An error happened.
    return error;
  });

