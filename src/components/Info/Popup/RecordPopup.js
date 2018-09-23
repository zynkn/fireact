import React, { Component } from 'react';

import moment from 'moment';


import styles from './Popup2.scss';
import classNames from 'classnames/bind';
import Swiper from 'swiper';
import './swiper.css';

const cx = classNames.bind(styles);

class RecordPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  close = () => {
    document.querySelector('#pane').classList.add(cx('leave'));
    document.querySelector('#bg').classList.add(cx('leave'));
    setTimeout(() => {
      this.props.close();
    }, 400)
  }
  componentDidMount() {
    let mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 8,
      centeredSlides: true,
    });
    let mySwiper2 = new Swiper('.swiper-container2', {
      direction: 'vertical',
      loop: false,
      slidesPerView: 3,
      centeredSlides: true,
    });
    let mySwiper3 = new Swiper('.swiper-container3', {
      direction: 'vertical',
      loop: false,
      slidesPerView: 3,
      centeredSlides: true,
    });
  }
  repsGenerate = () => {
    var items = [];
    for (let i = 0; i <= 50; i++) {
      items.push(
        <div key={i} className={`swiper-slide ${cx('slide')}`}>{i}</div>
      )
    }
    return items;
  }
  decimalGenerate = () => {
    var items = [];
    for (let i = 0; i <= 9; i++) {
      items.push(
        <div key={i} className={`swiper-slide ${cx('slide')}`}>{'.' + i}</div>
      )
    }
    return items;
  }
  render() {
    return (
      <div className={cx('Popup')}>
        <div id="bg" className={cx('bg')} onClick={this.close} />
        <div id="pane" className={cx('popup')}>
          <div className={cx('header')}>
            <input type="text" />
          </div>
          <div className={cx('content', 'col')}>
            <div className={cx('item-name')}>Weight</div>
            <div className={cx('item')}>

              <div className={cx('fixed-lense')}>
              </div>
              <div className={`swiper-container2 ${cx('slide-container')}`}>
                <div className={`swiper-wrapper ${cx('wrapper')}`}>
                  {this.repsGenerate()}
                </div>
              </div>
              <div className={`swiper-container3 ${cx('slide-container')}`}>
                <div className={`swiper-wrapper ${cx('wrapper')}`}>
                  {this.decimalGenerate()}
                </div>
              </div>
            </div>
            <div className={cx('item-name')}>Reps</div>
            <div className={cx('item')}>
              <div className={cx('fixed-lense', 'horizontal')}>
              </div>
              <div className={`swiper-container ${cx('slide-container', 'horizontal')}`}>
                <div className={`swiper-wrapper ${cx('wrapper')}`}>
                  {this.repsGenerate()}
                </div>
              </div>
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

export default RecordPopup;