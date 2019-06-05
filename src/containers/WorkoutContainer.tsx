import React from 'react';
import Calendar from 'components/calendar/Calendar';
import WorkoutList from 'components/calendar/WorkoutList';
import { Moment as MomentTypes } from "moment";

import { WorkoutDataProps } from 'stores/modules/workout';
import { updateSelectedDate, removeData, updateData, initializeData, addData } from 'stores/modules/workout';
import { StoreState } from 'stores/modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LocalForage from 'api/LocalForage';
import utils from 'utils';

interface Props {
  data: { [key: string]: WorkoutDataProps }
  selectedDate: MomentTypes
  labels: { [key: string]: Array<string> }
  selectDate: Function
  initializeData: Function
  updateData: Function
  addData: Function
  removeData: Function
}
class WorkoutContainer extends React.Component<Props> {

  initialize = () => {
    const startWeek = this.props.selectedDate.clone().startOf('month').week();
    const endWeek = this.props.selectedDate.clone().endOf('month').week() === 1 ? 53 : this.props.selectedDate.clone().endOf('month').week();
    let dates = utils.getCalendarDates(startWeek, endWeek);
    LocalForage.getSome(dates).then((res) => {
      this.props.initializeData({
        data: res[this.props.selectedDate.format('YYYY-MM-DD')],
        labels: utils.getUniqueItem(res),
      })
    });
  }
  componentDidMount() {
    this.initialize();
  }


  render() {
    const { props } = this;
    return (
      <>
        <Calendar selectedDate={props.selectedDate}
          labels={props.labels}
          selectDate={props.selectDate}
          addData={props.addData}
        />
        <WorkoutList data={props.data}
          removeData={props.removeData}
          updateData={props.updateData}
          addData={props.addData} />
      </>
    )
  }
}


export default connect(
  ({ workout }: StoreState) => ({
    data: workout.data,
    selectedDate: workout.selectedDate,
    labels: workout.labels
  }),
  (dispatch) => ({
    selectDate: bindActionCreators(updateSelectedDate, dispatch),
    initializeData: bindActionCreators(initializeData, dispatch),
    updateData: bindActionCreators(updateData, dispatch),
    addData: bindActionCreators(addData, dispatch),
    removeData: bindActionCreators(removeData, dispatch),
  })
)(WorkoutContainer);