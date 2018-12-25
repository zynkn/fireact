import React from 'react';
import storage from 'lib/storage';

import Loading from 'components/Common/Loading';
import Calendar from 'components/WorkoutPage/Calendar';
import AddBtn from 'components/WorkoutPage/AddBtn';
import WorkoutList from 'components/WorkoutPage/WorkoutList';

import * as actions from 'store/modules/workout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let selected = '';
class WorkoutContainer extends React.Component {
  constructor(props) {
    super(props);

  }
  get = ({ date }) => {
    const { uid } = storage.get('user');
    selected = date;
    this.props.Actions.loading();
    this.props.Actions.getWorkout({ uid: uid, date: date });
  }
  set = ({ id, name, detail }) => {
    const { uid } = storage.get('user');
    console.log(selected);
    this.props.Actions.setWorkout({ id, uid, name, detail, date: selected })
  }

  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <Calendar data={props.data} get={this.get} />
        <AddBtn history={props.history} set={this.set} />
        <WorkoutList data={props.data} />
        {props.isLoading ? <Loading /> : null}
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => ({
    data: state.workout.get('data'),
    isLoading: state.workout.get('isLoading'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(WorkoutContainer);