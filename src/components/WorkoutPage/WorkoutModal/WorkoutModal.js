import React, { Component } from 'react';

import styles from './WorkoutModal.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit';
import { ic_done } from 'react-icons-kit/md/ic_done'
import Swiper from 'swiper/dist/js/swiper.js'
import './swiper.css'

const cx = classNames.bind(styles);

const Overlay = (props) => {
  return (
    <div className={`bg ${cx('bg')}`} onClick={props.close} />
  )

};

class WorkoutModal extends Component {

  swipeGenerate = (n, char = '') => {
    let items = [];
    for (let i = 0; i <= n; i++) {
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
    new Swiper('.repsSwiper', {
      direction: 'horizontal',
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
                  <input type="text" className={cx('input')} />
                  <button className={cx('btn')}>
                    <Icon icon={ic_done} size={16} style={{ color: '#FF7043' }} />
                  </button>
                </div>
                <div className={cx('body')}>
                  <div className={cx('item')}>
                    <div className={cx('section')}>
                      <span className={cx('name')}>Weight</span>
                    </div>
                    <div className={cx('section')}>
                      <div className={cx('lense', 'left')} />
                      <div className={`weightSwiper1 ${cx('swiper-container')}`} >
                        <div className={`swiper-wrapper ${cx('wrap')}`}>
                          {this.swipeGenerate(150)}
                        </div>
                      </div>
                    </div>
                    <div className={cx('section')}>
                      <div className={cx('lense', 'right')} />
                      <div className={`weightSwiper2 ${cx('swiper-container')}`}>
                        <div className={`swiper-wrapper ${cx('wrap')}`}>
                          {this.swipeGenerate(9, '.')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('item')}>
                    <div className={cx('section')} style={{ flexBasis: '0%' }}>
                      <span className={cx('name')}>Reps</span>
                    </div>
                    <div className={cx('section')} style={{ flexBasis: '30%' }}>
                      <div className={cx('lense', 'row')} />
                      <div className={`repsSwiper ${cx('swiper-container', 'row')}`}>
                        <div className={`swiper-wrapper ${cx('wrap')}`}>
                          {this.swipeGenerate(50)}
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


export default WorkoutModal;