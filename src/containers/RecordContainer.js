import React, { Component, Fragment } from 'react';
import DateView from 'components/Calendar/DateView';
import ScheduleList from 'components/Calendar/ScheduleList';
import AddButton from 'components/Calendar/AddButton';
import Loading from 'components/Common/Loading';
import moment from 'moment';

import * as actions from 'store/modules/record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RecordContainer extends Component {

  componentDidMount() {
    let { userUID, selectedDate } = this.props;
    const now = moment().format('YYYYMMDD');
    if (selectedDate === '') { selectedDate = now };
    console.log(selectedDate);

    this.props.Actions.getRecord({ date: selectedDate, uid: userUID });
  }
  render() {
    const { props } = this;
    console.log('RENDER!')
    console.log(props)
    return (
      <Fragment>
        <DateView getData={props.Actions.getRecord} uid={props.userUID} selectedDate={props.selectedDate} loading={props.Actions.loading} />
        {/* <AddButton /> */}
        {props.isLoading ?
          <Loading />
          :
          <ScheduleList list={props.data ? props.data : new Array()} selectedDate={props.selectedDate} loading={props.Actions.loading} addData={props.Actions.addRecord} newData={props.Actions.newRecord} />
        }
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({
    data: state.record.get('data'),
    selectedDate: state.record.get('selectedDate'),
    userUID: state.login.get('userUID'),
    isLoading: state.record.get('isLoading'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(RecordContainer);