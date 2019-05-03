import React from 'react';
import storage from 'lib/storage';

import ItemList from 'components/MyPage/ItemList';
import Loading from 'components/Common/Loading';

import * as mypageActions from 'store/modules/mypage';
import * as loginActions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MypageContainer extends React.Component {
  setUserInfo = ({ data, flag }) => {
    const { props } = this;
    props.mypageActions.setUserInfo({
      uid: storage.get('user').uid,
      data: data,
      flag: flag,
    });
    this.props.mypageActions.loading();
    props.mypageActions.getUserInfo({ uid: storage.get('user').uid });
  }
  getUserInfo = () => {
    this.props.mypageActions.loading();
    this.props.mypageActions.getUserInfo({ uid: storage.get('user').uid });
  }
  logout = () => {
    this.props.loginActions.logout();
  }
  render() {
    const { weight, DOB, gender } = this.props;

    return (
      <React.Fragment>
        <ItemList logout={this.logout} weight={weight} DOB={DOB} gender={gender} setUserInfo={this.setUserInfo} getUserInfo={this.getUserInfo} />
        {this.props.isLoading ? <Loading /> : null}
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => ({
    weight: state.mypage.get('weight'),
    DOB: state.mypage.get('DOB'),
    gender: state.mypage.get('gender'),
    isLoading: state.mypage.get('isLoading'),
  }),
  (dispatch) => ({
    mypageActions: bindActionCreators(mypageActions, dispatch),
    loginActions: bindActionCreators(loginActions, dispatch),
  })
)(MypageContainer);