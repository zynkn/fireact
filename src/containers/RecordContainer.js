import React, { Component, Fragment } from 'react';

import moment from 'moment';

import * as actions from 'store/modules/record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RecordContainer extends Component {

  componentDidMount() {
    const now = moment().format('YYYYMMDD');
    console.log(this.props.Actions);
    this.props.Actions.getTest();
    this.props.Actions.getRecord({ date: now });
  }
  render() {
    const { props } = this;
    console.log(moment().format("YYYYMMDD"));
    return (
      <Fragment>
        <p onClick={props.Actions.getRecord}>Record Container</p>
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({
    //data: state.record.get('data'),
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(RecordContainer);