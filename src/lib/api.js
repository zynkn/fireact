import 'fire';
import * as firebase from 'firebase';

const GoogleProvider = new firebase.auth.GoogleAuthProvider();


export const googleLogin = () => 
  //var data = null;
  firebase.auth().signInWithPopup(GoogleProvider).then((result)=>{
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
  });
  //return data;

