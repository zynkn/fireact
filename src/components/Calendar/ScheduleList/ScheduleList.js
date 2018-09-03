import React, { Component, Fragment } from 'react';

import styles from './ScheduleList.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'

import AddPopup from 'components/Calendar/AddPopup';

const cx = classNames.bind(styles);

class ScheduleNewAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { state, props } = this;
    return (
      <section className={cx('ScheduleNewAdd')}>
        {state.isOpen ?
          <AddPopup uid={props.uid} close={this.toggle} name='' weight='' reps='' addData={props.add} selectedDate={props.selectedDate} />
          :
          null
        }
        <button className={cx('addButton')} onClick={state.isOpen ? null : this.toggle}>
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
    }
  }
  toggle = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }
  render() {
    const { props, state } = this;
    return (
      <div key={props.key} className={cx('list-item')} >
        <span className={cx('txt')} onClick={this.toggle}>{props.name}</span>
        {state.editMode ?
          <AddPopup uid={props.uid} changeName={props.changeName} close={this.toggle} name={props.name} weight={props.weight} reps={props.reps} id={props.id} addData={props.add} selectedDate={props.selectedDate} />
          :
          null
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
  }
  render() {
    const { props } = this;
    return (
      <span key={props.key} className={cx('tag')}>{props.weight}kg / {props.reps}reps</span>
    )
  }
}

class ScheduleList extends Component {
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
        <ScheduleItem add={this.props.add} uid={this.props.uid} key={list[i].id} id={list[i].id} name={list[i].name} weight={list[i].detail[list[i].detail.length - 1].weight} reps={list[i].detail[list[i].detail.length - 1].reps} addData={this.props.addData} selectedDate={this.props.selectedDate} changeName={this.props.changeName}>{tags}</ScheduleItem>
      )
      tags = [];
    }
    return items;
  }
  render() {
    const { props } = this;
    console.log('ScheduleList');
    console.log(props);
    return (
      <Fragment>
        <ScheduleNewAdd add={props.add} selectedDate={props.selectedDate} uid={props.uid} />
        <section className={cx('scheduleList')}>
          {this.create()}
        </section >
      </Fragment>
    );
  }
}


export default ScheduleList;