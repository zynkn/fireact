import React, { Component } from 'react';

import styles from './TestModal.scss';
import classNames from 'classnames/bind';
import { Transition } from 'react-transition-group';

const cx = classNames.bind(styles);

const defaultStyle = {
  transition: `all 1000ms ease-in-out`,
  opacity: 0,
}
const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(120px)' },
  entered: { opacity: 1, transform: 'translateY(0px)' },
  exiting: { opacity: 1, transform: 'translateY(0px)' },
  exited: { opacity: 0, transform: 'translateY(120px)' },
};
class TestModal extends Component {

  close = () => {
    //this.props.close();
  }
  render() {
    return (
      <Transition in={this.props.in}
        timeout={1000}
      >
        {(state) => (

          <div id="pane" className={cx('pane')} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {this.props.content}
            {state}
          </div>
        )}
      </Transition>
    );
  }
}


export default TestModal;