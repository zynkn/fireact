import React, { Component } from 'react';

import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'


import styles from './Popup.scss';
import classNames from 'classnames/bind';
import Swiper from 'swiper';
import './swiper.css';



const cx = classNames.bind(styles);


class Popup extends Component {
  close = () => {
    document.querySelector('#pane').classList.add(cx('leave'));
    document.querySelector('#bg').classList.add(cx('leave'));
    setTimeout(() => {
      this.props.close();
    }, 400)
  }
  componentDidMount() {
    if (this.props.title === "Date of Birth") {
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
      mySwiper.slideTo(70);
    } else if (this.props.title === "Height") {
      let mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
        slidesPerView: 5,
        centeredSlides: true,
      });
      mySwiper.slideTo(70);
    }

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

  contentGenerate = () => {
    if (this.props.title === "Gender") {
      return (
        <div className={cx('content', 'col')}>
          <span className={cx('item', 'selected')}>
            <Icon icon={ic_keyboard_arrow_right} size={24} style={{ marginRight: '8px' }} />
            Male
            </span>
          <span className={cx('item')}>
            <Icon icon={ic_keyboard_arrow_right} size={24} style={{ marginRight: '8px' }} />
            Female
            </span>
        </div>
      )
    } else if (this.props.title === "Date of Birth") {
      return (
        <div className={cx('content')}>
          <div className={cx('fixed-lense')} />
          <div className={cx('divide')}>
            {this.yearGenerate()}
          </div>
          <div className={cx('divide')}>
            {this.monthGenerate()}
          </div>
        </div>
      )
    } else if (this.props.title === "Height") {
      return (
        <div className={cx('content')}>
          <div className={cx('fixed-lense')}>
            <span>cm</span>
          </div>
          {this.heightGenerate()}
        </div>
      )
    }
  }
  render() {

    return (
      <div className={cx('Popup')}>
        <div id="bg" className={cx('bg')} onClick={this.close}>

        </div>
        <div id="pane" className={cx('popup')}>
          <div className={cx('header')}>
            {this.props.title}
          </div>
          {this.contentGenerate()}
          {/* <div className={cx('content')}>
            {/* <span className={cx('item', 'selected')}>
              <Icon icon={ic_keyboard_arrow_right} size={24} style={{ marginRight: '8px' }} />
              Male
            </span>
            <span className={cx('item')}>
              <Icon icon={ic_keyboard_arrow_right} size={24} style={{ marginRight: '8px' }} />
              Female
            </span> */}
          {/* <div className={cx('fixed-lense')}>
              <span>cm</span>
            </div>
            {this.heightGenerate()} */}
          {/* <div className={cx('fixed-lense')}>
            </div>
            <div className={cx('divide')}>
              {this.yearGenerate()}
            </div>
            <div className={cx('divide')}>
              {this.monthGenerate()}
            </div> */}
          {/*</div> */}
          <div className={cx('footer')}>
            <button className={cx('btn')} onClick={this.close}>Cancel</button>
            <button className={cx('btn')} onClick={this.close}>Save</button>
          </div>
        </div>
      </div>

    );
  }
}


export default Popup;