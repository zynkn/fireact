import React, { Component } from 'react';

import styles from './GenderModal.scss';
import classNames from 'classnames/bind';


import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'


const cx = classNames.bind(styles);

const Overlay = (props) => {
  return (
    <div className={`bg ${cx('bg')}`} onClick={props.close} />
  )

};

class GenderModal extends Component {
  close = () => {
    document.querySelector('.HistoryModal').onclick = null;
    document.querySelector('.HistoryModal').classList.remove(cx('enter'));
    document.querySelector('.bg').classList.remove(cx('enter'));

    document.querySelector('.HistoryModal').addEventListener("transitionend", (e) => {
      this.props.close();
    }, true);
  }
  componentDidUpdate(prevProps, prevState) {

    if (this.props.visible && !prevProps.visible) {
      setTimeout(
        () => {
          document.querySelector('.HistoryModal').classList.add(cx('enter'));
          document.querySelector('.bg').classList.add(cx('enter'));
        },
        1
      )
    }
  }

  ChangeGender = (e) => {

    this.close();
    this.props.set({
      data: e.target.innerText,
      flag: 'sex'
    })

  }
  render() {
    const { state, props } = this;
    return (
      <React.Fragment>
        {
          this.props.visible ?
            <React.Fragment>
              <Overlay close={this.close} />
              <div className={`HistoryModal ${cx('HistoryModal')}`}>
                <div className={cx('header')}>
                  <span className={cx('title')}>Gender</span>
                </div>
                <div className={cx('body')} onClick={this.ChangeGender}>
                  <div className={`${cx('item')} ${props.gender === 'Male' ? cx('selected') : null}`}>
                    <Icon icon={ic_keyboard_arrow_right} size={20} style={{ color: '#e0e0e0', marginRight: '16px' }} />
                    Male
                  </div>

                  <div className={`${cx('item')} ${props.gender === 'Female' ? cx('selected') : null}`}>
                    <Icon icon={ic_keyboard_arrow_right} size={20} style={{ color: '#e0e0e0', marginRight: '16px' }} />
                    Female
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


export default GenderModal;