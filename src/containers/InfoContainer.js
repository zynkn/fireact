import React, { Component, Fragment } from 'react';

import IndexList from 'components/Info/IndexList';
import Profile from 'components/Info/Profile';

import * as actions from 'store/modules/info';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './InfoContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class InfoContainer extends Component {


  set = () => {

  }
  componentDidMount() {
    this.props.Actions.getUserInfo({ uid: this.props.userUID });
    // this.props.Actions.setUserInfo({ uid: this.props.userUID, height: '123', DOB: '1992-11', sex: 'MALE' })
  }
  render() {
    console.log(this.props);
    return (
      <div className={cx('info_container')}>
        <IndexList />
        <Profile info={{ height: this.props.height, DOB: this.props.DOB, sex: this.props.sex }} />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    userUID: state.login.get('userUID'),
    height: state.info.get('height'),
    DOB: state.info.get('DOB'),
    sex: state.info.get('sex'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(InfoContainer);