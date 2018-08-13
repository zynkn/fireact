import React, { Component, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import Header from 'components/Common/Header';
import LoginPane from 'components/Authentication/LoginPane'
import Button from 'components/Authentication/Button';

import * as actions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Auth extends Component{


  renderRedirect = () => {
    if (this.props.isLogin) {
      return <Redirect to='/' />
    }
  }
  render(){
    console.log(this.props);
    const {isLogin} = this.props;
    return(
      <Fragment>
        {this.renderRedirect()}
        <LoginPane>
          <Button onClick={this.props.Actions.googleLogin} />
        </LoginPane>
      </Fragment>
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