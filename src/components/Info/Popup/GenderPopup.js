import React, { Component } from 'react';

import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'


import styles from './Popup.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class GenderPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: this.props.gender || 'Male',
    }
  }
  close = () => {
    document.querySelector('#pane').classList.add(cx('leave'));
    document.querySelector('#bg').classList.add(cx('leave'));
    setTimeout(() => {
      this.props.close();
    }, 400)
  }
  save = () => {
    const flag = "sex";
    var data = this.state.gender;
    this.props.setUserInfo({ data: data, flag: flag });
    this.close();
  }
  handleGender = (e) => {
    this.setState({
      gender: e.target.value
    })
  }


  render() {
    return (
      <div className={cx('Popup')}>
        <div id="bg" className={cx('bg')} onClick={this.close} />
        <div id="pane" className={cx('popup')}>
          <div className={cx('header')}>
            Gender
          </div>
          <div className={cx('content', 'col')} onClick={this.handleGender}>
            <label htmlFor="genderMale">
              <input type="radio" name="gender" value="Male" id="genderMale" checked={this.state.gender === "Male"} onChange={this.handleGender} />
              <span className={cx('item')}>
                <Icon icon={ic_keyboard_arrow_right} size={24} style={{ marginRight: '8px' }} />
                Male
            </span>
            </label>
            <label htmlFor="genderFemale">
              <input type="radio" name="gender" value="Female" id="genderFemale" checked={this.state.gender === "Female"} onChange={this.handleGender} />
              <span className={cx('item')}>
                <Icon icon={ic_keyboard_arrow_right} size={24} style={{ marginRight: '8px' }} />
                Female
            </span>
            </label>
          </div>
          <div className={cx('footer')}>
            <button className={cx('btn')} onClick={this.close}>Cancel</button>
            <button className={cx('btn')} onClick={this.save}>Save</button>
          </div>
        </div>
      </div>
    )
  }

}

export default GenderPopup;