import React, { Component, Fragment } from 'react';

import Header from 'components/Common/Header';
import Header2 from 'components/Common/Header2';
import DesktopNav from 'components/Common/DesktopNav';

import * as actions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {



  render() {
    const { isLogin } = this.props;
    return (
      <Fragment>
        {/* <Header isLogin={isLogin} googleLogout={this.props.Actions.googleLogout} /> */}
        <Header2 isLogin={isLogin} />
        <DesktopNav />
      </Fragment >
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
)(HeaderContainer);