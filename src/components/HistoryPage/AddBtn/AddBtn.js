import React, { Component } from 'react';

import styles from './AddBtn.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit';
import { ic_add } from 'react-icons-kit/md/ic_add'

const cx = classNames.bind(styles);


class AddBtn extends Component {
  render() {
    return (
      <div className={cx('btn-wrap')}>
        <button className={cx('AddBtn')}>
          <Icon icon={ic_add} size={24} style={{ color: '#fff' }} />
        </button>
      </div>

    );
  }
}


export default AddBtn;