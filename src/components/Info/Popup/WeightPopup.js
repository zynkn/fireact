import React, { Component } from 'react';

import moment from 'moment';


import styles from './Popup.scss';
import classNames from 'classnames/bind';
import Swiper from 'swiper/dist/js/swiper.js';
import './swiper.css';

const cx = classNames.bind(styles);

class WeightPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const flag = "weight";
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

  weightGenerate = () => {
    var items = [];
    for (let i = 10; i < 200; i++) {
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
  decimalGenerate = () => {
    var items = [];
    for (let i = 0; i < 10; i++) {
      items.push(
        <div key={i} className={`swiper-slide ${cx('slide')}`}>{'.' + i}</div>
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
  componentDidMount() {
    let mySwiper = new Swiper('.swiper-containerY', {
      direction: 'vertical',
      loop: false,
      slidesPerView: 5,
      centeredSlides: true,
    });
    let mySwiper2 = new Swiper('.swiper-containerM', {
      direction: 'vertical',
      loop: true,
      slidesPerView: 5,
      centeredSlides: true,
    });
    if (this.props.weight) {
      mySwiper.slideTo(parseInt(this.props.weight.split('.')[0], 0) - 10);
      mySwiper2.slideTo(parseInt(this.props.weight.split('.')[1], 0) + 5);
    }

  }
  render() {
    return (
      <div className={cx('Popup')}>
        <div id="bg" className={cx('bg')} onClick={this.close} />
        <div id="pane" className={cx('popup')}>
          <div className={cx('header')}>
            Weight
          </div>
          <div className={cx('content')}>
            <div className={cx('fixed-lense')}>
              <div className={cx('lense-section')} />
              <div className={cx('lense-section')}>
                <span>kg</span>
              </div>
            </div>
            <div className={cx('divide')}>
              {this.weightGenerate()}
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

export default WeightPopup;