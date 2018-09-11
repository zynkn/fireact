import React from 'react';

import styles from './AddButton.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'


const cx = classNames.bind(styles);


const AddButton = (props) => (
  <div className={cx('container')}>
    <div className={cx('wrap')}>
      <label className={cx('input-wrap')}>
        <input className={cx('input')} type="text" />
        <span className={cx('name')}>Name</span>
      </label>
    </div>
    <div className={cx('wrap')}>
      <label className={cx('input-wrap')}>
        <input className={cx('input', 'half')} type="text" />
        <span className={cx('name')}>Weight</span>
      </label>
      <label className={cx('input-wrap')}>
        <input className={cx('input', 'half')} type="text" />
        <span className={cx('name')}>Reps</span>
      </label>
    </div>
    {/* <div className={cx('wrap')}>
      <label className={cx('input-wrap')}>
        <input className={cx('input')} type="text" />
        <span className={cx('name')}>Reps</span>
      </label>
    </div> */}
    <button className={cx('addButton')} {...props}>
      <Icon icon={ic_add} size={24} style={{ color: '#fff' }} />
    </button >
  </div>

);


export default AddButton;