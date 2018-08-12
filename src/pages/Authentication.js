import React, {Component} from 'react';

import Header from 'components/Common/Header';
import Pane from 'components/Common/Pane';
import Button from 'components/Authentication/Button';
import 'fire';
import * as firebase from 'firebase';

var GoogleProvider = new firebase.auth.GoogleAuthProvider();

class Authentication extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      isLogin: false,
      data: null,
    }
  }
  signUpGoogle = () => {
    this.setState({
      isLoading: true
    })
    firebase.auth().signInWithPopup(GoogleProvider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log('token', token);
      console.log('user', user);
      console.log('userUID', user.uid);
      let data = {
        platform: 'google',
        uid: user.uid,
        user: {
          displayName: user.displayName,
          uid: user.uid,
          email: user.email
        }
      };
      this.setState({
        isLoading: false,
        isLogin: true,
        data: data,
      })
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

  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Header />
        <h1><span role="img" aria-label="fire">🔥</span>Fireact Auth<span role="img" aria-label="atom">⚛️</span></h1>
        <Pane>
          {this.state.isLogin ? null : (<Button onClick={this.signUpGoogle} />) } 
          {this.state.isLoading ? (<p>Now Loading..</p>) : null}
          {this.state.data ? (<p>{this.state.data.platform}</p>) : null}
        </Pane>
      </div>
    );
  }
};

export default Authentication;