import React, { Component } from 'react';
import moment from 'moment';

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
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      name: '',
      weight: '0.0',
      reps: '0',
      id: '',
    }
  }
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
      this.props.close();
    }, true);
  }
  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  };
  set = () => {
    const weight = document.querySelector('.weightSwiper1 .swiper-slide-active').innerText + document.querySelector('.weightSwiper2 .swiper-slide-active').innerText;
    const reps = document.querySelector('.repsSwiper .swiper-slide-active').innerText;
    const detail = {
      weight: weight,
      reps: reps,
      timestamp: moment().toISOString()
    }
    this.props.set({ id: this.state.id, detail: detail, name: this.state.name });
    this.close();
  }
  edit = () => {
    this.props.edit({ id: this.state.id, name: this.state.name });

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name || this.state.name,
      editMode: nextProps.name ? true : false,
      weight: nextProps.weight,
      reps: nextProps.reps,
      id: nextProps.id || '',
    })
  }
  componentDidUpdate(prevProps, prevState) {
    const { props } = this;
    if (props.visible && !prevProps.visible) {
      const swiper1 = new Swiper('.weightSwiper1', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 5,
        centeredSlides: true,
      });
      const swiper2 = new Swiper('.weightSwiper2', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 5,
        centeredSlides: true,
      });
      const swiper3 = new Swiper('.repsSwiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        centeredSlides: true,
      });

      swiper1.slideTo(parseInt(props.weight.split('.')[0], 0) + 5);
      swiper2.slideTo(parseInt(props.weight.split('.')[1], 0) + 5);
      swiper3.slideTo(parseInt(props.reps, 0) + 5);

      setTimeout(
        () => {
          document.querySelector('.HistoryModal').classList.add(cx('enter'));
          document.querySelector('.bg').classList.add(cx('enter'));
        },
        1
      )
    }
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
                  <input type="text" className={cx('input')} value={this.state.name} onChange={(e) => { this.handleChange(e, 'name') }} />
                  {this.state.editMode ?
                    <button className={cx('btn')} onClick={this.edit}>
                      <Icon icon={ic_done} size={16} style={{ color: '#FF7043' }} />
                    </button>
                    : null
                  }

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
                  <button className={cx('btn')} onClick={this.close}>Cancel</button>
                  <button className={cx('btn')} onClick={this.set}>Confirm</button>
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