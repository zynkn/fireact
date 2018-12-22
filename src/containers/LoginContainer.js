import React from 'react';
import { Redirect } from 'react-router-dom';

import * as actions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fireact from 'assets/svg/fireact21.svg';
import Google from 'assets/svg/Google.svg';
import Facebook from 'assets/svg/FacebookW.svg';
import LoginBtn from 'components/LoginPage/LoginBtn';


const LoginContainer = (props) => {
  const { Actions } = props;
  return (
    <div>
      {props.isLogin ? <Redirect to = '/' /> : null}
      <img alt="Fireact Icon" src={fireact} style={{ width: '82px' }} />
      <h2 style={{ marginTop: '32px', color: 'white', fontSize: '2.8em', fontWeight: '100' }}>Welcome to Fireact</h2>
      <div style={{ marginTop: '32px' }}>
        <LoginBtn onClick={Actions.googleLogin} title="Sign up with Google" img={Google} style={{ marginBottom: '24px' }} />
        <LoginBtn onClick={Actions.facebookLogin} title="Sign up with Facebook" img={Facebook} style={{ background: '#3C5A99', color: 'white' }} />
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    isLogin: state.login.get('isLogin')
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(LoginContainer);