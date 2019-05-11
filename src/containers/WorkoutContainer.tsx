import React from 'react';
import Calendar from 'components/calendar/Calendar';
import WorkoutList from 'components/calendar/WorkoutList';
import moment, { Moment as MomentTypes } from "moment";

import { WorkoutDataProps } from 'stores/modules/workout';
import { changeMonth, selectDate } from 'stores/modules/workout';
import { StoreState } from 'stores/modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface Props {
  data: Array<WorkoutDataProps>
  date: MomentTypes
  labels: { [key: string]: Array<string> }
  changeMonth: typeof changeMonth
  selectDate: typeof selectDate
}
class WorkoutContainer extends React.Component<Props> {

  render() {
    return (
      <>
        <Calendar date={this.props.date} labels={this.props.labels} changeMonth={this.props.changeMonth} selectDate={this.props.selectDate} />
        <WorkoutList data={this.props.data} />
      </>
    )
  }
}


export default connect(
  ({ workout }: StoreState) => ({
    data: workout.data,
    date: workout.date,
    labels: workout.labels
  }),
  (dispatch) => ({
    changeMonth: bindActionCreators(changeMonth, dispatch),
    selectDate: bindActionCreators(selectDate, dispatch),
  })
)(WorkoutContainer);