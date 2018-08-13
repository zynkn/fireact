import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import {ic_account_circle} from 'react-icons-kit/md/ic_account_circle'
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down'


const cx = classNames.bind(styles);

const Dropdown = () => (
  <div className={cx('Dropdown')}>
    <span className={cx('name')}>
    zynkn <Icon icon={ic_keyboard_arrow_down} size={20} style={{color: 'white', marginLeft: '8px'}}/>
    </span>
    <ul className={cx('dropdown-wrap')}>
      <li>Logout</li>
      <li>Logout</li>
    </ul>
  </div>
)


// TODO: state component로 변경해야한다잉 
const Header = (props) => (
  <div className={cx('Header')}>
    <div className={cx('content')}>
      <span className={cx('title')}><NavLink to="/">🔥Fireact⚛️</NavLink></span>

      <div className={cx('right')}>
        <ul className={cx('menu-wrap')}>
          <li><NavLink to="/db" activeClassName={cx('active')}>Database</NavLink></li>
        </ul>
        <ul className={cx('user-wrap')}>
          {
            props.isLogin ? 
            (<Dropdown />)
            // (<span className={cx('name')}>zynkn <Icon icon={ic_keyboard_arrow_down} size={20} style={{color: 'white', marginLeft: '8px'}}/> </span>) 
            : 
            (<li><NavLink to="/auth"><Icon icon={ic_account_circle} size={24} style={{color: 'white'}}/></NavLink></li>          )
          }
          
        </ul>
      </div>
    </div>
  </div>
);


export default Header;