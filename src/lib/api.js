import 'fire';
import * as firebase from 'firebase';
const db = firebase.firestore();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();

const getQuery = (date)=>{
  const ref = db.collection("record");
  const arr = [];
  const query = ref.where("date", "==", date);
  query.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data())
      arr.push(doc.data())
    });
  }).then(()=>{
    console.log(arr);
    return arr
  }).catch((error)=>{
    console.log(error);
    return error;
  })
}

export const getRecord = ({date}) => getQuery(date)
// {
//   const ref = db.collection("record");
//   const arr = [];
//   const query = ref.where("date", "==", date);
//   query.get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//       console.log(doc.data())
//       arr.push(doc.data())
//     });
//   }).then(()=>{
//     console.log(arr);
//     return arr
//   }).catch((error)=>{
//     console.log(error);
//     return error;
//   })
// }
// db.collection("record").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//     console.log(doc.data())
//   });
//   console.log(querySnapshot);
//   return querySnapshot;
// }).catch((error) => {
//   console.log(error);
//   return error;
// })



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
//return data;

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

