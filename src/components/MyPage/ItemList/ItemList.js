import React, { Component } from 'react';
import storage from 'lib/storage';

import styles from './ItemList.scss';
import classNames from 'classnames/bind';

import GenderModal from 'components/MyPage/GenderModal';
import WeightModal from 'components/MyPage/WeightModal';
import DateModal from 'components/MyPage/DateModal';
import GoogleIcon from 'assets/svg/Google.svg';
import FacebookIcon from 'assets/svg/Facebook.svg';

import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'

const cx = classNames.bind(styles);

const Item = (props) => {
  return (
    <div className={cx('Item')} {...props}>
      <span className={cx('txt')}>{props.title}</span>
      <div className={cx('box')}>
        <span className={cx('txt', 'sm', 'bold')} style={{ marginRight: '8px' }}>{props.value}</span>
        {props.icon ?
          <img alt="icon" src={props.icon} width={24} style={{ padding: '4px' }} />
          :
          <Icon icon={ic_keyboard_arrow_right} size={24} style={{ color: '#e0e0e0' }} />
        }
      </div>
    </div>
  )
}

class ItemList extends Component {
  constructor(props) {
    super(props);
    props.getUserInfo();
    this.state = {
      GenderModal: false,
      DateModal: false,
      WeightModal: false,
    }
  }

  GenderModal = () => {
    this.setState({
      GenderModal: true,
    })
  }
  open = (name) => {
    this.setState({
      [name]: true,
    })
  }
  close = (name) => {
    this.setState({
      [name]: false,
    })
  }

  render() {
    // const { providerId } = this.props.user.providerData[0]
    const { props } = this;
    let providerId = null;
    let icon = null;
    if (storage.get('user')) {
      providerId = storage.get('user').providerId;
    }
    if (providerId === "google.com") {
      icon = GoogleIcon;
    } else if (providerId === "facebook.com") {
      icon = FacebookIcon;
    }
    return (
      <React.Fragment>
        <div className={cx('ItemList')}>
          <div className={cx('title')}>
            Personal Information
        </div>
          <Item title="Gender" value={props.gender} onClick={() => { this.open('GenderModal') }} />
          <Item title="Date of Birth" value={props.DOB} onClick={() => { this.open('DateModal') }} />
          <Item title="Weight" value={props.weight + 'kg'} onClick={() => { this.open('WeightModal') }} />
          <div className={cx('title')}>
            Settings
        </div>
          <Item title="Logout" value={providerId} icon={icon} onClick={this.props.logout} />
        </div>
        <GenderModal set={props.setUserInfo} gender={props.gender} visible={this.state.GenderModal} close={() => { this.close('GenderModal') }} />
        <DateModal set={props.setUserInfo} DOB={props.DOB} visible={this.state.DateModal} close={() => { this.close('DateModal') }} />
        <WeightModal set={props.setUserInfo} weight={props.weight} visible={this.state.WeightModal} close={() => { this.close('WeightModal') }} />
      </React.Fragment>
    );
  }
}


export default ItemList;