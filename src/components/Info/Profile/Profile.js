import React, { Component } from 'react';

import Popup from 'components/Info/Popup';
import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'


import styles from './Profile.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);



const month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
    }
  }
  openPopup = (i) => {
    this.setState({
      popup: i,
    })
  }
  closePopup = () => {
    this.setState({
      popup: false,
    })
  }
  generatePopup = () => {
    if (this.state.popup === 'Gender') {
      return <Popup setUserInfo={this.props.setUserInfo} close={this.closePopup} title='Gender' />
    } else if (this.state.popup === 'DOB') {
      return <Popup setUserInfo={this.props.setUserInfo} close={this.closePopup} title='Date of Birth' DOB={this.props.info.DOB} />
    } else if (this.state.popup === 'Height') {
      return <Popup setUserInfo={this.props.setUserInfo} close={this.closePopup} title='Height' height={this.props.info.height} />
    } else {
      return null
    }
  }
  render() {
    return (
      <div className={cx('Profile')}>
        <ul className={cx('profile-wrap')}>
          <li onClick={() => { this.openPopup('Gender') }}>Gender
            <span>
              {this.props.info.sex}
              <Icon icon={ic_keyboard_arrow_right} size={24} style={{ color: '#bebebe', marginLeft: '8px' }} />
            </span>
          </li>
          <li onClick={() => { this.openPopup('DOB') }}>Date of Birth
          <span>
              {this.props.info.DOB.substring(0, 4)}
              -
              {this.props.info.DOB.substring(4, 7)}
              <Icon icon={ic_keyboard_arrow_right} size={24} style={{ color: '#bebebe', marginLeft: '8px' }} />
            </span>
          </li>
          <li onClick={() => { this.openPopup('Height') }}>Height
          <span>
              {this.props.info.height} cm
              <Icon icon={ic_keyboard_arrow_right} size={24} style={{ color: '#bebebe', marginLeft: '8px' }} />
            </span>
          </li>
        </ul>
        {
          this.generatePopup()
        }
      </div>
    );
  }
}


export default Profile;