import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down'


const cx = classNames.bind(styles);

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  open = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { name } = this.props;
    const { isOpen } = this.state;
    console.log(this.props);
    return (
      <div className={cx('Dropdown')}>
        <span className={cx('name')} onClick={this.open}>
          {name} <Icon icon={ic_keyboard_arrow_down} size={20} style={{ color: 'white', marginLeft: '8px' }} />
        </span>
        {isOpen ? (<ul className={cx('dropdown-wrap')}>
          <li onClick={this.props.logout}>Logout</li>
        </ul>) : ''}

      </div>
    )
  }
}


// TODO: state component로 변경해야한다잉 
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { props } = this;
    return (
      <div className={cx('Header')}>
        <div className={cx('content')}>
          <span className={cx('title')}><NavLink to="/">🔥Fireact⚛️</NavLink></span>

          <div className={cx('right')}>
            <ul className={cx('menu-wrap')}>
              <li><NavLink to="/today" activeClassName={cx('active')}>Today</NavLink></li>
              <li><NavLink to="/db" activeClassName={cx('active')}>Database</NavLink></li>
            </ul>
            <ul className={cx('user-wrap')}>
              {
                props.isLogin ?
                  (<Dropdown name='지녕군' logout={this.props.googleLogout} />)
                  // (<span className={cx('name')}>zynkn <Icon icon={ic_keyboard_arrow_down} size={20} style={{color: 'white', marginLeft: '8px'}}/> </span>) 
                  :
                  (<li><NavLink to="/auth"><Icon icon={ic_account_circle} size={24} style={{ color: 'white' }} /></NavLink></li>)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }

};


export default Header;