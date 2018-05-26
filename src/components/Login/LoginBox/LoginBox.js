import React, { Fragment } from 'react';

import { Google, Facebook } from 'components/Common/Icons';
import LogoutButton from 'components/Login/LogoutButton';

import styles from './LoginBox.scss';
import classNames from 'classnames/bind';

import 'fire';
import * as firebase from 'firebase';

const cx = classNames.bind(styles);
var GoogleProvider = new firebase.auth.GoogleAuthProvider();
var FacebookProvider = new firebase.auth.FacebookAuthProvider();

GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
FacebookProvider.addScope('user_birthday');

const LoginBox = ({isLogin, uid, loginCheck, user, platform}) => {
  const signUpGoogle = () => {
    firebase.auth().signInWithPopup(GoogleProvider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log('user', user);
      let data = {
        isLogin: true,
        platform: 'Google',
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
      var token = result.credential.accessToken;
      var user = result.user;
      console.log('user', user);
      let data = {
        isLogin: true,
        platform: 'Facebook',
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
  const signOut = () => {
    firebase.auth().signOut().then(function() {
      let data = {
        isLogin: false,
        platform: null,
        user: null
      };
      loginCheck(data);
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }
  return (
    <div className={cx('LoginBox')}>
      {
        isLogin ?
        <div>
          <h2>Success Login with {platform}</h2>
          <p>{user.uid}</p>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <LogoutButton onClick={signOut} />
        </div>
        :
        <Fragment>
          <div className={cx('pane')} onClick={signUpGoogle}>
            <Google width="48px" />
            <p className={cx('txt')}>Google</p>
          </div>
          <div className={cx('pane')} onClick={signUpFacebook}>
            <Facebook width="48px" />
            <p className={cx('txt')}>Facebook</p>
          </div>
        </Fragment>
      }
    </div>
  )
}


export default LoginBox;