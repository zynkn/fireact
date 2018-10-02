import React, { Component } from 'react';

import TestModal from 'components/Test/TestModal';
import DelayUnmount from 'components/Common/DelayUnmount';

const Modal01 = DelayUnmount(TestModal);

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    }
  }
  testHistoryPush = (historyState) => {
    const { history } = this.props;

    console.log(history);
    history.push(history.location.pathname, historyState);
  }
  historyPop = () => {
    const { history } = this.props;
    history.goBack();
  }
  modalRenderer = () => {
    const { history } = this.props;
    if (history.location.state === "Modal1") {
      return <TestModal close={this.historyPop} content='Test01' />
    } else if (history.location.state === "Modal2") {
      return <TestModal close={this.historyPop} content="Test02" />
    } else if (history.location.state === "Modal3") {
      return <TestModal close={this.historyPop} content="Test03" />
    }
  }
  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Coming Soon...</h1>
        <button onClick={() => { this.testHistoryPush('Modal1') }}>Modal01</button>
        <button onClick={() => { this.testHistoryPush('Modal2') }}>Modal02</button>
        <button onClick={() => { this.testHistoryPush('Modal3') }}>Modal03</button>
        {this.modalRenderer()}
      </div>
    );
  }
};

export default Today;