import React from 'react';

import { Google, Facebook } from 'components/Common/Icons';

import styles from './LoginBox.scss';
import classNames from 'classnames/bind';

import 'fire';
import * as firebase from 'firebase';

const cx = classNames.bind(styles);
var GoogleProvider = new firebase.auth.GoogleAuthProvider();
var FacebookProvider = new firebase.auth.FacebookAuthProvider();

GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
FacebookProvider.addScope('user_birthday');

const LoginBox = ({isLogin, uid, loginCheck, user}) => {
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
      loginCheck(data);
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
  const signUpFacebook = () => {
    firebase.auth().signInWithPopup(FacebookProvider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
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
      loginCheck(data);
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
    isLogin ? 
    <div>
      <h2>Success Login</h2>
      <p>{uid}</p>
      <p>{user.displayName}</p>
      <p>{user.email}</p>
    </div>
    :
    <div className={cx('LoginBox')}>
      <div className={cx('pane')} onClick={signUpGoogle}>
        <Google width="48px" />
        <p className={cx('txt')}>Google</p>
      </div>
      <div className={cx('pane')} onClick={signUpFacebook}>
        <Facebook width="48px" />
        <p className={cx('txt')}>Facebook</p>
      </div>
    </div>
  )
}


export default LoginBox;