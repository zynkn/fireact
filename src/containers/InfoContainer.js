import React, { Component, Fragment } from 'react';

import IndexList from 'components/Info/IndexList';
import Profile from 'components/Info/Profile';

import * as actions from 'store/modules/record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './InfoContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class InfoContainer extends Component {

  render() {
    return (
      <div className={cx('info_container')}>
        <IndexList />
        <Profile />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    userUID: state.login.get('userUID'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(InfoContainer);