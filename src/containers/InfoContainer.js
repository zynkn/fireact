import React, { Component, Fragment } from 'react';

import moment from 'moment';
import IndexList from 'components/Info/IndexList';
import Profile from 'components/Info/Profile';

import * as actions from 'store/modules/info';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './InfoContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class InfoContainer extends Component {


  setUserInfo = ({ data, flag }) => {
    this.props.Actions.setUserInfo({
      uid: this.props.userUID,
      data: data,
      flag: flag,
    });
    this.props.Actions.getUserInfo({ uid: this.props.userUID });
  }
  componentDidMount() {
    this.props.Actions.getUserInfo({ uid: this.props.userUID });
    // this.props.Actions.setUserInfo({
    //   uid: this.props.userUID,
    //   data: {
    //     data: '123',
    //     timestamp: moment().format()
    //   },
    //   // DOB: '1992-12',
    //   // sex: 'FEMALE',
    //   flag: 'height',
    // })
  }
  render() {
    console.log(this.props);
    return (
      <div className={cx('info_container')}>
        <IndexList />
        <Profile setUserInfo={this.setUserInfo} info={{ height: this.props.height, DOB: this.props.DOB, sex: this.props.sex, weight: this.props.weight }} />
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
    weight: state.info.get('weight'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(InfoContainer);