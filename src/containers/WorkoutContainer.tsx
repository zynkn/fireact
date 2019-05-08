import React from 'react';
import Calendar from 'components/calendar/Calendar';
import WorkoutList from 'components/calendar/WorkoutList';

import { WorkoutState, WorkoutDataProps } from 'stores/modules/workout';
import { connect } from 'react-redux';


class WorkoutContainer extends React.Component<WorkoutState>{

  render() {
    console.log(this.props.data);
    return (
      <>
        <Calendar />
        <WorkoutList data={this.props.data} />
      </>
    )
  }
}


export default connect<WorkoutState>(
  (state: any) => ({
    data: state.workout.data
  })
)(WorkoutContainer);