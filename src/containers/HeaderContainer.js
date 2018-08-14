import React, { Component, Fragment } from 'react';
import Header from 'components/Common/Header';
import LoginPane from 'components/Authentication/LoginPane'
import Button from 'components/Authentication/Button';

import * as actions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Auth extends Component {


  render() {
    console.log(this.props);
    const { isLogin } = this.props;
    return (
      <Header isLogin={isLogin} googleLogout={this.props.Actions.googleLogout} />
    )
  }
}

export default connect(
  (state) => ({
    isLogin: state.login.get('isLogin'),
    user: state.login.get('user'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(Auth);