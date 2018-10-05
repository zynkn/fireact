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
  toggle = () => {
    const { history } = this.props;

    console.log(history);
    history.push(history.location.pathname, 'historyState');
    this.setState({
      isMounted: !this.state.isMounted
    })
  }
  modalRenderer = () => {
    const { history } = this.props;
    if (history.location.state === "Modal1") {
      return <TestModal close={this.historyPop} content='Test01' in={true} />
    } else if (history.location.state === "Modal2") {
      return <TestModal close={this.historyPop} content="Test02" in={true} />
    } else if (history.location.state === "Modal3") {
      return <TestModal close={this.historyPop} content="Test03" in={true} />
    }
  }
  modalRenderer2 = () => {
    const { history } = this.props;
    console.log(history);
    // if (history.action === "POP" && history.location.state !== undefined) {
    //   this.setState({
    //     isMounted: false,
    //   })
    // }
  }
  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;
    console.log('componentDidUpdate');
    console.log(prevProps, prevState);
    if (history.action === "POP" && prevState.isMounted) {
      this.setState({
        isMounted: false
      })
    }
  }
  componentDidMount() {
    const { history } = this.props;
    console.log('componentDidMount');
    console.log(history);
  }
  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Coming Soon...</h1>
        <button onClick={() => { this.testHistoryPush('Modal1') }}>Modal01</button>
        <button onClick={() => { this.testHistoryPush('Modal2') }}>Modal02</button>
        <button onClick={() => { this.testHistoryPush('Modal3') }}>Modal03</button>
        <button onClick={this.toggle}>Toggle</button>
        <TestModal close={this.historyPop} content="cONTENT" in={this.state.isMounted} />
        {this.modalRenderer2()}
      </div>
    );
  }
};

export default Today;