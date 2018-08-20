import 'fire';
import * as firebase from 'firebase';
const db = firebase.firestore();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();

// const ref = db.collection("record");
// const arr = [];
// const query = ref.where("date", "==", '20180819');
// export const getRecord = () =>

//   query.get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//       console.log(doc.data())
//       arr.push(doc.data())
//     });
//   }).then(() => {
//     console.log(arr);
//     return arr;
//   }).catch((error) => {
//     console.log(error);
//     return error;
//   })

async function tgg(date) {
  console.log('date', date);
  return date;
}
export const getRecord = ({ date }) => {
  console.log('ggg');
  return tgg(date);
}

export const googleLogin = () =>
  //var data = null;
  firebase.auth().signInWithPopup(GoogleProvider).then((result) => {
    return result;
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
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

