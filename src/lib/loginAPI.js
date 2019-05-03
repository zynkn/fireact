import 'fire';
import * as firebase from 'firebase';


const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();

export const facebookLogin = () => {
  return (
    firebase.auth().signInWithPopup(FacebookProvider).then(result => {
      return result;
    }).catch(error => {
      return error;
    })
  )
}

export const googleLogin = () => {
  return (
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        return firebase.auth().signInWithPopup(GoogleProvider).then(result => {
          return result;
        }).catch(error => {
          return error;
        })
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return error;
      })
  );
}

export const logout = () => {
  return (
    firebase.auth().signOut().then(result => {
      return true;
    }).catch(error => {
      return error;
    })
  )
}



