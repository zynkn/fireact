import React, { Component } from 'react';

import styles from './TestModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class TestModal extends Component {

  close = () => {
    document.querySelector('#pane').classList.add(cx('leave'));
    //document.querySelector('#bg').classList.add(cx('leave'));
    setTimeout(() => {
      this.props.close();
    }, 900)
  }
  render() {
    return (
      <div className={cx('bg')} onClick={this.close}>

        <div id="pane" className={cx('pane')}>
          {this.props.content}
        </div>
      </div>
    );
  }
}


export default TestModal;