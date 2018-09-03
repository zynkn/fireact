import 'fire';
import * as firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

const GoogleProvider = new firebase.auth.GoogleAuthProvider();

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


export const setRecord = ({ id, uid, date, name, detail }) => setRecordAsync(id, uid, date, name, detail)

async function setRecordAsync(id, uid, date, name, detail) {
  const ref = id === '' ?
    db.collection("record").doc(uid).collection(date).doc()
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

