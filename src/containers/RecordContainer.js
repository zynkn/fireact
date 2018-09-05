import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

import DateView from 'components/Calendar/DateView';
import ScheduleList from 'components/Calendar/ScheduleList';
import Loading from 'components/Common/Loading';

import * as actions from 'store/modules/record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RecordContainer extends Component {
  renderRedirect = () => {
    if (!this.props.isLogin) {
      return <Redirect to='/auth' />
    }
  }
  componentDidMount() {
    let { userUID, selectedDate, isLogin } = this.props;
    const now = moment().format('YYYYMMDD');
    if (selectedDate === '') { selectedDate = now };
    if (isLogin) {
      this.props.Actions.getRecord({ date: selectedDate, uid: userUID });
    }
  }

  add = ({ id, date, name, detail }) => {
    const { userUID, selectedDate, Actions } = this.props;
    Actions.setRecord({ id, uid: userUID, date, name, detail });
    Actions.getRecord({ date: selectedDate, uid: userUID });
  }
  get = ({ date }) => {
    const uid = this.props.userUID;
    this.props.Actions.loading(date);
    this.props.Actions.getRecord({ uid: uid, date: date });
  }
  edit = ({ name, id }) => {
    const { userUID, selectedDate, Actions } = this.props;
    Actions.changeName({ uid: userUID, date: selectedDate, name, id });
    Actions.getRecord({ date: selectedDate, uid: userUID });
  }

  render() {
    const { props } = this;
    return (
      <Fragment>
        {this.renderRedirect()}
        <DateView get={this.get} selectedDate={props.selectedDate} />
        {props.isLoading ?
          <Loading />
          :
          <ScheduleList list={props.data} selectedDate={props.selectedDate} add={this.add} changeName={this.edit} />
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
    isLogin: state.login.get('isLogin'),
    isLoading: state.record.get('isLoading'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(RecordContainer);