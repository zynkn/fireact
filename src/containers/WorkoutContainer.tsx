import React from 'react';
import Calendar from 'components/calendar/Calendar';
import WorkoutList from 'components/calendar/WorkoutList';
import moment, { Moment as MomentTypes } from "moment";

import { WorkoutDataProps } from 'stores/modules/workout';
import { updateSelectedDate, setCalendarLabels, initData, initializeData } from 'stores/modules/workout';
import { openModal, toggleModal } from 'stores/modules/modal';
import { StoreState } from 'stores/modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LocalForage from 'api/LocalForage';
import utils from 'utils';

interface Props {
  data: Array<WorkoutDataProps>
  selectedDate: MomentTypes
  labels: { [key: string]: Array<string> }
  selectDate: typeof updateSelectedDate
  openModal: typeof openModal
  toggleModal: typeof toggleModal
  initializeData: typeof initializeData
}
class WorkoutContainer extends React.Component<Props> {

  initialize = () => {
    LocalForage.init();
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
    return (
      <>
        <Calendar selectedDate={this.props.selectedDate}
          labels={this.props.labels}
          selectDate={this.props.selectDate}
          openModal={this.props.openModal}
        />
        <WorkoutList data={this.props.data} openModal={this.props.openModal} />
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
    openModal: bindActionCreators(openModal, dispatch),
    toggleModal: bindActionCreators(toggleModal, dispatch),
    initializeData: bindActionCreators(initializeData, dispatch),

  })
)(WorkoutContainer);