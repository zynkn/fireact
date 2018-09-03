import React, { Component, Fragment } from 'react';
import moment from 'moment';

import { Icon } from 'react-icons-kit'
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'

import styles from './AddPopup.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class AddPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: props.name == '' ? true : false,
      name: props.name,
      weight: props.weight == '' ? 0 : props.weight,
      reps: props.reps == '' ? 0 : props.reps,
      id: props.id ? props.id : '',
    }
  }
  nameToggle = () => {
    this.setState({
      editName: !this.state.editName
    })
  }
  close = () => {
    document.querySelector('#pane').classList.add(cx('leave'));
    document.querySelector('#bg').classList.add(cx('leave'));
    setTimeout(() => {
      this.props.close();
    }, 400)
  }
  nameEditFunc = () => {
    const { state, props } = this;
    console.log(state.name);
    this.props.nameChange(state.name);
    this.props.changeName({ date: props.selectedDate, name: state.name, id: state.id, uid: props.uid });
    this.setState({
      editName: !this.state.editName
    })
  }
  add = () => {
    const { state, props } = this;
    if (state.name === '' || state.weight === '' || state.reps === '') {
      return;
    }
    const detail = { weight: state.weight, reps: state.reps, timestamp: moment().format() };
    props.addData({ date: props.selectedDate, name: state.name, detail: detail, id: state.id, uid: props.uid });
    this.close();
  }
  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  }
  control = (name, dir) => {
    if (dir === 'increase') {
      this.setState({
        [name]: parseFloat(this.state[name]) + 1
      });
    } else if (dir === 'decrease') {
      if (this.state[name] > 0) {
        this.setState({
          [name]: parseFloat(this.state[name]) - 1
        })
      }
    } else {
      console.log('Check your code...');
    }
  }
  render() {
    const { state } = this;
    console.log(this.props.name);
    return (
      <div className={cx('AddPopup')} >
        <div id="bg" className={cx('bg')} onClick={this.close} />
        <div id="pane" className={cx('pane')}>
          <div className={cx('title-wrap')}>
            {
              state.editName ?
                <Fragment>
                  <input type="text" onChange={(e) => { this.handleChange(e, 'name') }} value={state.name} />
                  {this.props.name == '' ? null :
                    <button className={cx('saveButton')} onClick={this.nameEditFunc}>
                      <Icon icon={ic_mode_edit} size={16} style={{ color: '#000' }} />
                    </button>
                  }

                </Fragment>
                :
                <span onClick={this.nameToggle}>{state.name}</span>
            }
          </div>
          <div className={cx('record-wrap')}>
            <span className={cx('title')}>Weight</span>
            <button className={cx('count-button')} onClick={() => { this.control('weight', 'decrease') }}>
              <Icon icon={ic_remove} size={16} style={{ color: '#000' }} />
            </button>
            <input type="number" className={cx('numberCounter')} onChange={(e) => { this.handleChange(e, 'weight') }} value={this.state.weight} />
            <button className={cx('count-button')} onClick={() => { this.control('weight', 'increase') }}>
              <Icon icon={ic_add} size={16} style={{ color: '#000' }} />
            </button>
          </div>
          <div className={cx('record-wrap')}>
            <span className={cx('title')}>Reps</span>
            <button className={cx('count-button')} onClick={() => { this.control('reps', 'decrease') }}>
              <Icon icon={ic_remove} size={16} style={{ color: '#000' }} />
            </button>
            <input type="number" className={cx('numberCounter')} onChange={(e) => { this.handleChange(e, 'reps') }} value={this.state.reps} />
            <button className={cx('count-button')} onClick={() => { this.control('reps', 'increase') }}>
              <Icon icon={ic_add} size={16} style={{ color: '#000' }} />
            </button>
          </div>
          <div className={cx('button-wrap')}>
            <button className={cx('addbutton')} onClick={this.add}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}


export default AddPopup;