import React, { Component, Fragment } from 'react';
import DateView from 'components/Calendar/DateView';
import ScheduleList from 'components/Calendar/ScheduleList';
import AddButton from 'components/Calendar/AddButton';

import * as actions from 'store/modules/record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RecordContainer extends Component {

  // componentWillMount() {
  //   const now = moment().format('YYYYMMDD');
  //   this.props.Actions.getRecord({ date: now });
  // }
  render() {
    const { props } = this;
    console.log(props)
    return (
      <Fragment>
        <DateView getData={props.Actions.getRecord} uid={props.userUID} />
        {/* <AddButton /> */}
        <ScheduleList list={props.data} />
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({
    data: state.record.get('data'),
    selectedDate: state.record.get('selectedDate'),
    userUID: state.login.get('userUID'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(RecordContainer);