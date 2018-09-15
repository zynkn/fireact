import React, { Component, Fragment } from 'react';
import moment from 'moment';
import AddPopup from 'components/Calendar/AddPopup';
import styles from './AddButton.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'


const cx = classNames.bind(styles);

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weight: '',
      reps: '',
      mobilePopup: false,
    }
  }

  handleInput = (e, stateName) => {
    this.setState({
      [stateName]: e.target.value,
    })
  }
  closePopup = () => {
    this.setState({
      mobilePopup: false,
    })
  }
  add = () => {
    const { props, state } = this;
    if (window.innerWidth < 769) {
      this.setState({
        mobilePopup: true,
      })
    } else {
      const detail = { weight: state.weight, reps: state.reps, timestamp: moment().format() };
      if (state.name !== '' && state.reps > 0) {
        props.add({ name: state.name, detail, id: detail.timestamp });
        this.setState({
          name: '',
          weight: '',
          reps: '',
        })
      }
    }
  }
  render() {
    const { props, state } = this;
    return (
      <Fragment>
        <div className={cx('container')}>
          <div className={cx('wrap')}>
            <label className={cx('input-wrap')}>
              <input className={cx('input')} type="text" onChange={(e) => this.handleInput(e, 'name')} value={state.name} />
              <span className={cx('name')}>Name</span>
            </label>
          </div>
          <div className={cx('wrap')}>
            <label className={cx('input-wrap')}>
              <input className={cx('input', 'half')} type="text" onChange={(e) => this.handleInput(e, 'weight')} value={state.weight} />
              <span className={cx('name')}>Weight</span>
            </label>
            <label className={cx('input-wrap')}>
              <input className={cx('input', 'half')} type="text" onChange={(e) => this.handleInput(e, 'reps')} value={state.reps} />
              <span className={cx('name')}>Reps</span>
            </label>
          </div>
          <button className={cx('addButton')} {...props} onClick={this.add}>
            <Icon icon={ic_add} size={24} style={{ color: '#fff' }} />
          </button >
        </div>
        {
          state.mobilePopup ?
            <AddPopup close={this.closePopup} name='' weight='' reps='' id='' add={props.add} edit={props.edit} />
            :
            null
        }
      </Fragment>

    )
  }
}



export default AddButton;