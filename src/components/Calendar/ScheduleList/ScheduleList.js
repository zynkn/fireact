import React, { Component, Fragment } from 'react';

import styles from './ScheduleList.scss';
import classNames from 'classnames/bind';

import moment from 'moment';
import { Icon } from 'react-icons-kit'
import { ic_fitness_center } from 'react-icons-kit/md/ic_fitness_center'
import { ic_repeat } from 'react-icons-kit/md/ic_repeat'
import { ic_build } from 'react-icons-kit/md/ic_build'
import { ic_add } from 'react-icons-kit/md/ic_add'

import AddPopup from 'components/Calendar/AddPopup';

const cx = classNames.bind(styles);

class ScheduleNewAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: '',
      weight: '',
      reps: '',
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleWeightChange = (e) => {
    this.setState({
      weight: e.target.value
    })
  }
  handleRepsChange = (e) => {
    this.setState({
      reps: e.target.value
    })
  }

  newData = () => {
    const { state } = this
    this.props.newData({ date: this.props.selectedDate, name: state.name, timestamp: moment().format(), weight: state.weight, reps: state.reps });
    this.toggle();
  }
  render() {
    const { state } = this;
    console.log(this.props);
    return (
      <section className={cx('ScheduleNewAdd')}>
        {state.isOpen ?
          // <Fragment>
          //   <input type="text" className={cx('list-input')} value={state.name} onChange={this.handleNameChange} />
          //   <div className={cx('input-wrap')}>
          //     <Icon icon={ic_fitness_center} size={24} style={{ color: '#e0e0e0' }} />
          //     <input type="text" className={cx('list-input')} placeholder="weight" value={state.weight} onChange={this.handleWeightChange} />
          //     <Icon icon={ic_repeat} size={24} style={{ color: '#e0e0e0' }} />
          //     <input type="number" className={cx('list-input')} placeholder="reps" value={state.reps} onChange={this.handleRepsChange} />
          //   </div>
          // </Fragment>
          <AddPopup close={this.toggle} name='' weight='' reps='' addData={this.props.newData} selectedDate={this.props.selectedDate} />
          :
          ''
        }

        <button className={cx('addButton')} onClick={state.isOpen ? this.newData : this.toggle}>
          <Icon icon={ic_add} size={24} style={{ color: '#e0e0e0' }} />
        </button>
      </section>

    )
  }
}

class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      selected: false,
      value: props.name,
      weight: props.weight,
      reps: props.reps,
    }
  }
  toggle = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }
  handleNameChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleWeightChange = (e) => {
    this.setState({
      weight: e.target.value
    })
  }
  handleRepsChange = (e) => {
    this.setState({
      reps: e.target.value
    })
  }
  render() {
    const { props, state } = this;
    console.log(props);
    return (
      <div key={props.key} className={cx('list-item', this.state.selected ? 'selected' : '')} >
        {
          this.state.selected ?
            <div className={cx('item-tooltab')}>
              <button className={cx('tool-button')}>
                <Icon icon={ic_build} size={12} style={{ color: '#fff' }} />
              </button>

            </div>
            :
            null
        }
        <span className={cx('txt')} onClick={this.toggle}>{props.name}</span>
        {this.state.editMode ?
          // <Fragment>
          //   <input type="text" className={cx('list-input')} value={state.value} onChange={this.handleNameChange} />
          //   <div className={cx('input-wrap')}>
          //     <Icon icon={ic_fitness_center} size={24} style={{ color: '#e0e0e0' }} />
          //     <input type="text" className={cx('list-input')} placeholder="weight" value={state.weight} onChange={this.handleWeightChange} />
          //     <Icon icon={ic_repeat} size={24} style={{ color: '#e0e0e0' }} />
          //     <input type="number" className={cx('list-input')} placeholder="reps" value={state.reps} onChange={this.handleRepsChange} />
          //   </div>
          //   <div style={{ padding: '16px 24px' }}>
          //     <button className={cx('addButton')} onClick={() => { props.addData({ id: props.id, date: props.selectedDate, name: state.value, timestamp: moment().format(), weight: state.weight, reps: state.reps }) }}>
          //       <Icon icon={ic_add} size={24} style={{ color: '#e0e0e0' }} />
          //     </button>
          //   </div>

          // </Fragment>
          <AddPopup changeName={this.props.changeName} close={this.toggle} name={props.name} weight={props.weight} reps={props.reps} id={props.id} addData={this.props.addData} selectedDate={this.props.selectedDate} />
          :
          ''
        }

        <div className={cx('tag-wrap')}>
          {props.children}
        </div>
      </div>
    )
  }
}

class ScheduleTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { props } = this;
    return (
      <span key={props.key} className={cx('tag')}>{props.weight}kg / {props.reps}reps</span>
    )
  }
}

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: true,
    }
  }
  toggle = () => {
    this.setState({
      addOpen: !this.state.addOpen
    })
  }
  create = () => {
    const { list } = this.props;
    let items = [];
    let tags = [];
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].detail.length; j++) {
        tags.push(
          <ScheduleTag key={j} weight={list[i].detail[j].weight} reps={list[i].detail[j].reps} />
        )
      }
      items.push(
        <ScheduleItem key={list[i].id} id={list[i].id} name={list[i].name} weight={list[i].detail[list[i].detail.length - 1].weight} reps={list[i].detail[list[i].detail.length - 1].reps} addData={this.props.addData} selectedDate={this.props.selectedDate} changeName={this.props.changeName}>{tags}</ScheduleItem>
      )
      tags = [];
    }
    return items;
  }
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <ScheduleNewAdd newData={this.props.newData} selectedDate={this.props.selectedDate} />
        <section className={cx('scheduleList')}>
          {this.create()}
        </section >
        {/* <AddPopup /> */}
      </Fragment>

    );
  }
}


export default ScheduleList;