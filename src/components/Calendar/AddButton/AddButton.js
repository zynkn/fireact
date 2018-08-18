import React from 'react';

import styles from './AddButton.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_create } from 'react-icons-kit/md/ic_create'


const cx = classNames.bind(styles);


const AddButton = (props) => (
  <button className={cx('addButton')} {...props}>
    <Icon icon={ic_create} size={24} style={{ color: '#fff' }} />
  </button >
);


export default AddButton;