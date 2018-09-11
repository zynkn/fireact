import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'components/Authentication/Button';

import * as actions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './auth.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Auth extends Component {
  renderRedirect = () => {
    if (this.props.isLogin) {
      return <Redirect to='/' />
    }
  }
  render() {
    return (
      <Fragment>
        {this.renderRedirect()}
        <div className={cx('pane')}>
          <div className={cx('header')}>
            <span role="img" aria-label="fire" style={{ marginRight: '8px' }}>🔥</span>
            Login
          </div>
          <div className={cx('btn-wrap')}>
            <Button onClick={this.props.Actions.googleLogin} />
          </div>
        </div>
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