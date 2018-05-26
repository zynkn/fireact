import React, { Component } from 'react';
import LoginBox from 'components/Login/LoginBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as loginActions from 'store/modules/login';


class LoginContainer extends Component {

  loginCheck = (data) => {
    const { LoginActions } = this.props;
    console.log(data);
    LoginActions.loginCheck(data);
  }
  render() {
    const { loginCheck } = this;
    return (
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <LoginBox loginCheck = {loginCheck} {...this.props} />
      </section>
      
    );
  }
};

export default connect(
  (state) => ({
    isLogin: state.login.get('isLogin'),
    platform: state.login.get('platform'),
    uid: state.login.get('uid'),
    user: state.login.get('user'),
  }),
  (dispatch) => ({
    LoginActions: bindActionCreators(loginActions, dispatch)
  })
)(withRouter(LoginContainer));