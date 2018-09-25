import React, { Component, Fragment } from 'react';

import moment from 'moment';
import { Icon } from 'react-icons-kit'
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit'

import styles from './Popup3.scss';
import classNames from 'classnames/bind';
import Swiper from 'swiper/dist/js/swiper.js';
import './swiper.css';

const cx = classNames.bind(styles);

class RecordPopup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: props.name === '' ? true : false,
      name: props.name,
      weight: props.weight === '' ? 0 : props.weight,
      reps: props.reps === '' ? 0 : props.reps,
      id: props.id ? props.id : '',
      type: props.type ? props.type : 'kg',
    };
  }
  nameToggle = () => {
    this.setState({
      editName: !this.state.editName
    })
  }
  typeToggle = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      this.setState({
        type: 'lbs',
      })
    } else {
      this.setState({
        type: 'kg',
      })
    }
  }
  nameEditFunc = () => {
    const { state } = this;
    this.props.edit({ name: state.name, id: state.id });
    this.nameToggle();
  }
  close = () => {
    document.querySelector('#pane').classList.add(cx('leave'));
    document.querySelector('#bg').classList.add(cx('leave'));
    setTimeout(() => {
      this.props.close();
    }, 400)
  }

  add = () => {
    const { state, props } = this;
    const weight = document.querySelector('.swiper-container2 .swiper-slide-active').innerText + '' + document.querySelector('.swiper-container3 .swiper-slide-active').innerText;
    const reps = document.querySelector('.swiper-container .swiper-slide-active').innerText;

    const detail = {
      weight: weight,
      reps: reps,
      timestamp: moment().format(),
      type: state.type,
    }
    props.add({ name: state.name, detail: detail, id: state.id });
    this.close();
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  }
  componentDidMount() {
    let mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 5,
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
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
    });
    if (this.state.id !== '') {
      console.log(this.state.weight.split('.')[1]);
      mySwiper2.slideTo(parseInt(this.state.weight.split('.')[0], 0));
      mySwiper3.slideTo(parseInt(this.state.weight.split('.')[1], 0) + 3);
      mySwiper.slideTo(parseInt(this.state.reps, 0) + 5);
    }


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
  weightGenerate = () => {
    var items = [];
    for (let i = 0; i <= 150; i++) {
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
            {
              this.state.editName ?
                <Fragment>
                  <input type="text" className={cx('title-edit')} onChange={(e) => { this.handleChange(e, 'name') }} value={this.state.name} />
                  {this.props.name === '' ? null :
                    <button className={cx('title-edit-btn')} style={{ marginLeft: '8px' }} onClick={this.nameEditFunc}>
                      <Icon icon={ic_mode_edit} size={16} style={{ color: '#fff' }} />
                    </button>
                  }
                </Fragment>
                :
                <span className={cx('title-name')} onClick={this.nameToggle}>{this.props.name}</span>
            }
          </div>
          <div className={cx('content')}>
            <div className={cx('item')}>
              <div className={cx('item-section')} style={{ flexBasis: '30%' }}>
                <span className={cx('item-name')}>Weight</span>
                <label htmlFor="weightToggle">
                  <input type="checkbox" id="weightToggle" onChange={this.typeToggle} checked={this.state.type === 'lbs'} />
                  <span className={cx('ball')} />
                  <span className={cx('kg')}>kg</span>
                  <span className={cx('lbs')}>lbs</span>
                </label>
              </div>
              <div className={cx('item-section', 'row')} style={{ flexBasis: '70%' }}>
                <div className={cx('swiper-lense')}>
                </div>
                <div className={`swiper-container2 ${cx('slide-container')}`}>
                  <div className={`swiper-wrapper ${cx('wrapper')}`}>
                    {this.weightGenerate()}
                  </div>
                </div>
                <div className={`swiper-container3 ${cx('slide-container')}`}>
                  <div className={`swiper-wrapper ${cx('wrapper')}`}>
                    {this.decimalGenerate()}
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('item')} style={{ height: '30px' }}>
              <div className={cx('item-section')} style={{ flexBasis: '30%' }}>
                <span className={cx('item-name')}>Reps</span>
              </div>
              <div className={cx('item-section')} style={{ flexBasis: '70%' }}>
                <div className={cx('swiper-lense', 'horizon')}>
                </div>
                <div className={`swiper-container ${cx('slide-container', 'horizon')}`}>
                  <div className={`swiper-wrapper ${cx('wrapper')}`}>
                    {this.repsGenerate()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('footer')}>
            <button className={cx('btn')} onClick={this.close}>Cancel</button>
            <button className={cx('btn')} onClick={this.add}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RecordPopup2;