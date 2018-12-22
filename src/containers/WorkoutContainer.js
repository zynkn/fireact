import React from 'react';

import Calendar from 'components/WorkoutPage/Calendar';

import storage from 'lib/storage';
import * as actions from 'store/modules/workout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WorkoutContainer extends React.Component {
  constructor(props){
    super(props);
    if(storage.get('workout')){
      console.log(storage.get('workout'));
    }
  }
  render() {
    return (
      <React.Fragment>
        <Calendar />
      </React.Fragment>
  
    )
  }
}

export default connect(
  (state) => ({
    //data: state.workout.get('data')
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(WorkoutContainer);