import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

import DateView from 'components/Calendar/DateView';
import ScheduleList from 'components/Calendar/ScheduleList';
import Loading from 'components/Common/Loading';

import * as actions from 'store/modules/record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './RecordContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class RecordContainer extends Component {
  constructor(props) {
    super(props);
  }
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
  del = ({ id, detail, flag }) => {
    const { userUID, selectedDate, Actions } = this.props;
    Actions.delRecord({ id, uid: userUID, date: selectedDate, detail, flag });
    Actions.getRecord({ date: selectedDate, uid: userUID });
  }
  goBack = () => {

    console.log('goBack')
  }
  historyPush = () => {
    const { history, location } = this.props;
    history.push(location.pathname, 'test');
  }
  historyPop = () => {
    const { history, location } = this.props;
    history.goBack();
  }



  render() {
    const { props } = this;
    //console.log('RecordContainer');
    // console.log(props.history);
    return (
      <Fragment>
        {this.renderRedirect()}
        <div className={cx('container')}>
          <DateView get={this.get} selectedDate={props.selectedDate} />
          {props.isLoading ?
            <Loading />
            :
            <ScheduleList history={props.history} historyPop={this.historyPop} historyPush={this.historyPush} list={props.data} selectedDate={props.selectedDate} add={this.add} changeName={this.edit} del={this.del} />
          }
        </div>
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