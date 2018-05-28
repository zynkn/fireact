import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LoginModal from 'components/Login/LoginModal';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import * as loginActions from 'store/modules/login';


import 'fire';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';
var app = admin.initializeApp();

var GoogleProvider = new firebase.auth.GoogleAuthProvider();
var FacebookProvider = new firebase.auth.FacebookAuthProvider();

GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
FacebookProvider.addScope('user_birthday');

class LoginContainer extends Component {
  state = {
    anchorEl: null,
  }
  handleOpen = event => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }
  handleClose = () => {
    this.setState({
      anchorEl: null,
    })
  }
  loginCheck = (data) => {
    const { LoginActions } = this.props;
    LoginActions.loginCheck(data);
  }
  toggle = () => {
    const { LoginActions } = this.props;
    LoginActions.modalToggle({
      isOpen: !this.props.isOpen
    });
  }
  signOut = () => {
    admin.auth().getUser(this.props.user.uid)
      .then(function (userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully fetched user data:", userRecord.toJSON());
      })
      .catch(function (error) {
        console.log("Error fetching user data:", error);
      });
    firebase.auth().signOut().then(() => {
      let data = {
        isLogin: false,
        platform: null,
        user: null,
        isOpen: false,
      };
      const { LoginActions } = this.props;
      LoginActions.loginCheck(data);
    }).catch(function (error) {
      // An error happened.
      console.log(error);
    });

  }
  render() {
    const { loginCheck, toggle, handleOpen } = this;
    const { isLogin } = this.props;
    return (
      <Fragment>
        <IconButton aria-label="login" onClick={isLogin ? handleOpen : toggle}>
          <AccountCircle style={{ fill: 'white' }} />
        </IconButton >
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClick={this.handleClose}
          style={{ top: '48px' }}
        >
          <MenuItem>Setting</MenuItem>
          <MenuItem onClick={this.signOut}>Logout</MenuItem>
        </Menu>
        <span>{this.props.user ? this.props.user.displayName : 'Login'}</span>
        <LoginModal isOpen={this.props.isOpen} toggle={toggle} loginCheck={loginCheck} />
      </Fragment>

    );
  }
};

export default connect(
  (state) => ({
    isLogin: state.login.get('isLogin'),
    platform: state.login.get('platform'),
    user: state.login.get('user'),
    isOpen: state.login.get('isOpen'),
  }),
  (dispatch) => ({
    LoginActions: bindActionCreators(loginActions, dispatch),
  })
)(withRouter(LoginContainer));