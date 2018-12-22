import React, { Component } from 'react';

import styles from './WeightModal.scss';
import classNames from 'classnames/bind';

import Swiper from 'swiper/dist/js/swiper.js'
import './swiper.css'

const cx = classNames.bind(styles);

const Overlay = (props) => {
  return (
    <div className={`bg ${cx('bg')}`} onClick={props.close} />
  )

};

class WeightModal extends Component {

  swipeGenerate = (start, end, char = '', ) => {
    let items = [];
    for (let i = start; i <= end; i++) {
      items.push(
        <div key={i} className={`swiper-slide ${cx('slide')}`}>{char + '' + i}</div>
      )
    }
    return items;
  }
  close = () => {
    document.querySelector('.HistoryModal').onclick = null;
    document.querySelector('.HistoryModal').classList.remove(cx('enter'));
    document.querySelector('.bg').classList.remove(cx('enter'));

    document.querySelector('.HistoryModal').addEventListener("transitionend", (e) => {
      console.log(e);
      this.props.close();
    }, true);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.visible) {
      setTimeout(
        () => {
          document.querySelector('.HistoryModal').classList.add(cx('enter'));
          document.querySelector('.bg').classList.add(cx('enter'));
        },
        1
      )
    }
  }

  componentDidMount() {
    new Swiper('.weightSwiper1', {
      direction: 'vertical',
      loop: true,
      slidesPerView: 5,
      centeredSlides: true,
    });
    new Swiper('.weightSwiper2', {
      direction: 'vertical',
      loop: true,
      slidesPerView: 5,
      centeredSlides: true,
    });

  }
  render() {
    return (
      <React.Fragment>
        {
          this.props.visible ?
            <React.Fragment>
              <Overlay close={this.close} />
              <div className={`HistoryModal ${cx('HistoryModal')}`}>
                <div className={cx('header')}>
                  <span className={cx('title')}>Weight</span>
                </div>
                <div className={cx('body')}>
                  <div className={cx('item')}>
                    <div className={cx('section')}>
                      <div className={cx('lense', 'left')} />
                      <div className={`weightSwiper1 ${cx('swiper-container')}`} >
                        <div className={`swiper-wrapper ${cx('wrap')}`}>
                          {this.swipeGenerate(30, 150)}
                        </div>
                      </div>
                    </div>
                    <div className={cx('section')}>
                      <div className={cx('lense', 'right')} />
                      <div className={`weightSwiper2 ${cx('swiper-container')}`}>
                        <div className={`swiper-wrapper ${cx('wrap')}`}>
                          {this.swipeGenerate(0, 9, '.')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('footer')}>
                  <button className={cx('btn')}>Cancel</button>
                  <button className={cx('btn')}>Confirm</button>
                </div>
              </div>

            </React.Fragment>
            :
            null
        }
      </React.Fragment>
    );
  }
}


export default WeightModal;