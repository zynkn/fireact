import React, { Component } from 'react';
import { FirebaseIcon } from 'components/Common/Icons';

import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import LoginButton from 'components/Login/LoginButton';
import { GooglePlus, Facebook2 } from 'components/Common/Icons';

import styles from './LoginModal.scss';
import classNames from 'classnames/bind';

import 'fire';
import * as firebase from 'firebase';

const cx = classNames.bind(styles);
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();

GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
FacebookProvider.addScope('user_birthday');

class LoginModal extends Component {

  signUpGoogle = () => {
    firebase.auth().signInWithPopup(GoogleProvider).then((result) => {
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
        },
        isOpen: false,
      };
      this.props.loginCheck(data);
    }).catch((error) => {
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
  signUpFacebook = () => {
    firebase.auth().signInWithPopup(FacebookProvider).then((result) => {
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
        },
        isOpen: false,
      };
      this.props.loginCheck(data);
    }).catch((error) => {
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

  render() {

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.isOpen}
        onClose={this.props.toggle}
      >
        <Grid item className={cx('paper')} xs={10} sm={8} md={2} lg={2}>
          <Typography variant="title" id="modal-title" style={{ marginBottom: '16px' }}>
            <FirebaseIcon height="24px" style={{ marginRight: '16px' }} />
            Authentication
          </Typography>
          <LoginButton color="primary" styles={{ backgroundColor: '#DD4B39' }} onClick={this.signUpGoogle}>
            <GooglePlus width="24px" style={{ marginRight: '12px' }} />Sign up with Google
          </LoginButton>
          <LoginButton color="primary" styles={{ backgroundColor: '#3c5a9a' }} onClick={this.signUpFacebook}>
            <Facebook2 height="24px" fill="white" style={{ marginRight: '12px' }} />Sign up with Facebook
          </LoginButton>
        </Grid>
      </Modal>
    );
  }
}


export default LoginModal;