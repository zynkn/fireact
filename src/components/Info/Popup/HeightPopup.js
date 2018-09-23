import React, { Component } from 'react';

import moment from 'moment';

import styles from './Popup.scss';
import classNames from 'classnames/bind';
import Swiper from 'swiper';
import './swiper.css';

const cx = classNames.bind(styles);

class GenderPopup extends Component {
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
    const flag = "height";
    var data = {
      data: '',
      timestamp: moment().format()
    }
    for (let i = 0; i < selected.length; i++) {
      data.data += selected[i].innerText;
    }
    this.props.setUserInfo({ data: data, flag: flag });
    this.close();
  }
  heightGenerate = () => {
    var items = [];
    for (let i = 100; i < 220; i++) {
      items.push(
        <div key={i} className={`swiper-slide ${cx('slide')}`}>{i}</div>
      )
    }
    return (
      <div className={`swiper-container ${cx('slide-container')}`}>
        <div className={`swiper-wrapper ${cx('wrapper')}`}>
          {items}
        </div>
      </div>
    )
  }
  decimalGenerate = () => {
    var items = [];
    for (let i = 0; i < 10; i++) {
      items.push(
        <div key={i} className={`swiper-slide ${cx('slide')}`}>{'.' + i}</div>
      )
    }
    return (
      <div className={`swiper-containerD ${cx('slide-container')}`}>
        <div className={`swiper-wrapper ${cx('wrapper')}`}>
          {items}
        </div>
      </div>
    )
  }

  componentDidMount() {
    let mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: false,
      slidesPerView: 5,
      centeredSlides: true,
    });
    let mySwiper2 = new Swiper('.swiper-containerD', {
      direction: 'vertical',
      loop: false,
      slidesPerView: 5,
      centeredSlides: true,
    });
    mySwiper.slideTo(parseInt(this.props.height.substring(0, 3), 0) - 100);
    mySwiper2.slideTo(parseInt(this.props.height.substring(4, 5), 0));
    console.log(this.props.height.substring(4, 5))

  }
  render() {
    return (
      <div className={cx('Popup')}>
        <div id="bg" className={cx('bg')} onClick={this.close} />
        <div id="pane" className={cx('popup')}>
          <div className={cx('header')}>
            {this.props.title}
          </div>
          <div className={cx('content')}>
            <div className={cx('fixed-lense')}>
              <div className={cx('lense-section')} />
              <div className={cx('lense-section')}>
                <span>Cm</span>
              </div>

            </div>
            <div className={cx('divide')}>
              {this.heightGenerate()}
            </div>
            <div className={cx('divide')}>
              {this.decimalGenerate()}
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

export default GenderPopup;