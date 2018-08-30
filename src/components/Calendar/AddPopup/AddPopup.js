import React, { Component, Fragment } from 'react';

import styles from './AddPopup.scss';
import classNames from 'classnames/bind';

import moment from 'moment';

import { Icon } from 'react-icons-kit'
import { ic_fitness_center } from 'react-icons-kit/md/ic_fitness_center'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'

const cx = classNames.bind(styles);


class AddPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: props.name == '' ? true : false,
      name: props.name,
      weight: props.weight,
      reps: props.reps,
      id: props.id ? props.id : '',
    }
  }
  componentWillMount() {

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
  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  changeWeight = (e) => {
    this.setState({
      weight: e.target.value
    })
  }
  changeReps = (e) => {
    this.setState({
      reps: e.target.value
    })
  }
  add = () => {
    const { state, props } = this;
    props.addData({ date: props.selectedDate, name: state.name, timestamp: moment().format(), weight: state.weight, reps: state.reps, id: state.id });
    this.close();
  }
  nameEditFunc = () => {
    const { state, props } = this;

    this.props.changeName({ date: props.selectedDate, name: state.name, id: state.id });
    this.setState({
      editName: !this.state.editName
    })
  }
  render() {
    const { state } = this;
    return (
      <div className={cx('AddPopup')} >
        <div id="bg" className={cx('bg')} onClick={this.close} />
        <div id="pane" className={cx('pane')}>
          <div className={cx('title-wrap')}>
            {/* <input type="text" /> */}
            {
              state.editName ?
                <Fragment>
                  <input type="text" onChange={this.changeName} value={state.name} />
                  <button onClick={this.nameEditFunc}>Save</button>
                </Fragment>

                :
                <span onClick={this.nameToggle}>{state.name}</span>
            }
          </div>
          <div className={cx('record-wrap')}>
            <span className={cx('title')}>Weight</span>
            <button className={cx('count-button')}>
              <Icon icon={ic_remove} size={16} style={{ color: '#000' }} />
            </button>
            <input type="number" className={cx('numberCounter')} onChange={this.changeWeight} value={this.state.weight} />
            <button className={cx('count-button')}>
              <Icon icon={ic_add} size={16} style={{ color: '#000' }} />
            </button>
          </div>
          <div className={cx('record-wrap')}>
            <span className={cx('title')}>Reps</span>
            <button className={cx('count-button')}>
              <Icon icon={ic_remove} size={16} style={{ color: '#000' }} />
            </button>
            <input type="number" className={cx('numberCounter')} onChange={this.changeReps} value={this.state.reps} />
            <button className={cx('count-button')}>
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