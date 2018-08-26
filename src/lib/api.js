import 'fire';
import * as firebase from 'firebase';
import 'firebase/firestore';
import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://fireact-b8dc7.firebaseio.com",
});
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);


const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export const newRecord = ({ date, name, timestamp, weight, reps }) =>
  db.collection("record").doc('VcZblxmPQdhe23FjXjlmg7vm90K3').collection(date).doc().set({
    name: name,
    detail: [
      { reps: reps, weight: weight, timestamp: timestamp }
    ],
  })
    .then((res) => {
      console.log("Document successfully written!");
      return res;
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      return error;
    });


export const addRecord = ({ date, id, name, timestamp, weight, reps }) =>

  db.collection("record").doc('VcZblxmPQdhe23FjXjlmg7vm90K3').collection(date).doc(id).set({
    name: name,
    detail: firebase.firestore.FieldValue._arrayUnion(
      { reps: reps, weight: weight, timestamp: timestamp }
    ),
  }, { merge: true })
    .then((res) => {
      console.log("Document successfully written!");
      return res;
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      return error;
    });


async function records(date, uid) {
  const ref = db.collection("record");
  const arr = [];
  const query = ref.where("date", "==", date).where("userID", "==", uid);
  await query.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      arr.push(doc.data())
    });
  }).catch((error) => {
    console.log(error);
    return error;
  })
  return arr;
}

async function test(date, uid) {

  const ref = db.collection("record");
  const ans = {};
  ans['date'] = date;
  const arr = [];
  const query = ref.doc(uid).collection(date);

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
export const getRecord = ({ date, uid }) => test(date, uid)

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

