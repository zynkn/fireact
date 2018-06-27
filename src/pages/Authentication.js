import React from 'react';
import Pane from 'components/Common/Pane';
import Button from 'components/Authentication/Button';
import 'fire';
import * as firebase from 'firebase';

var GoogleProvider = new firebase.auth.GoogleAuthProvider();

const Authentication = () => {
  const signUpGoogle = () => {
    firebase.auth().signInWithPopup(GoogleProvider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log('token', token);
      console.log('user', user);
      console.log('userUID', user.uid);
      let data = {
        isLogin: true,
        platform: 'google',
        uid: user.uid,
        user: {
          displayName: user.displayName,
          uid: user.uid,
          email: user.email
        }
      };
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
  }
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1><span role="img" aria-label="fire">🔥</span>Fireact Auth<span role="img" aria-label="atom">⚛️</span></h1>
      <Pane>
        <Button onClick={signUpGoogle} />
      </Pane>
    </div>
  );
};

export default Authentication;