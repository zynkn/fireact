import React, { Component } from 'react';
import LoginPane from 'components/Login/LoginPane';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';



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
      <section>
        Login Container
      </section>

    );
  }
};

export default connect(
  (state) => ({
    isLogin: state.login.get('isLogin'),
    platform: state.login.get('platform'),
    user: state.login.get('user'),
  }),
  (dispatch) => ({
    LoginActions: bindActionCreators(loginActions, dispatch)
  })
)(withRouter(LoginContainer));