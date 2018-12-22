import React from 'react';

import Loading from 'components/Common/Loading';


import storage from 'lib/storage';
import * as loginActions from 'store/modules/login';
import * as workoutActions from 'store/modules/workout';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const StorageContainer = (props) => {
  const { loginActions } = props;
  function getUserData() {
    const data = storage.get('user');
    if (!data) {
      // alert('no data!');
      console.log('no data in the storage')
      return;
    };
    loginActions.setLoggedInfo(data);
    workoutActions.getAll(storage.get('user').uid);
  }
  return (
    <React.Fragment>
      {/* {getUserData()} */}
      {props.isLoading ?
        null
        :
        null
      }

    </React.Fragment>
  )
}

export default connect(
  (state) => ({
    isLogin: state.login.get('isLogin'),
    isLoading: state.login.get('isLoading'),
  }),
  (dispatch) => ({
    loginActions: bindActionCreators(loginActions, dispatch),
    workoutActions: bindActionCreators(workoutActions, dispatch),
  })
)(StorageContainer);