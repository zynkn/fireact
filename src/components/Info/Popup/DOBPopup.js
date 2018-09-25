import React, { Component } from 'react';

import moment from 'moment';


import styles from './Popup.scss';
import classNames from 'classnames/bind';
import Swiper from 'swiper/dist/js/swiper.js';
import './swiper.css';

const cx = classNames.bind(styles);

class DOBPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'Male',
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
    var selected = document.querySelectorAll('.swiper-slide-active');
    const flag = "DOB";
    var data = '';
    for (let i = 0; i < selected.length; i++) {
      data += selected[i].innerText;
    }
    this.props.setUserInfo({ data: data, flag: flag });
    this.close();
  }

  yearGenerate = () => {
    var items = [];
    for (let i = 1900; i < 2019; i++) {
      items.push(
        <div key={i} className={`swiper-slide ${cx('slide')}`}>{i}</div>
      )
    }
    return (
      <div className={`swiper-containerY ${cx('slide-container')}`}>
        <div className={`swiper-wrapper ${cx('wrapper')}`}>
          {items}
        </div>
      </div>
    )
  }
  monthGenerate = () => {
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var items = [];
    for (let i = 0; i < 12; i++) {
      items.push(
        <div key={i} className={`swiper-slide ${cx('slide')}`}>{months[i]}</div>
      )
    }
    return (
      <div className={`swiper-containerM ${cx('slide-container')}`}>
        <div className={`swiper-wrapper ${cx('wrapper')}`}>
          {items}
        </div>
      </div>
    )
  }
  getMonthNum = (name) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.indexOf(name);
  }
  componentDidMount() {
    let mySwiper = new Swiper('.swiper-containerY', {
      direction: 'vertical',
      loop: false,
      slidesPerView: 5,
      centeredSlides: true,
    });
    let mySwiper2 = new Swiper('.swiper-containerM', {
      direction: 'vertical',
      loop: false,
      slidesPerView: 5,
      centeredSlides: true,
    });
    if (this.props.DOB) {
      mySwiper.slideTo(parseInt(this.props.DOB.substring(0, 4)) - 1900);
      mySwiper2.slideTo(this.getMonthNum(this.props.DOB.substring(4, 7)))
    }

  }
  render() {
    return (
      <div className={cx('Popup')}>
        <div id="bg" className={cx('bg')} onClick={this.close} />
        <div id="pane" className={cx('popup')}>
          <div className={cx('header')}>
            Date of Birth
          </div>
          <div className={cx('content')}>
            <div className={cx('fixed-lense')} />
            <div className={cx('divide')}>
              {this.yearGenerate()}
            </div>
            <div className={cx('divide')}>
              {this.monthGenerate()}
            </div>
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

export default DOBPopup;