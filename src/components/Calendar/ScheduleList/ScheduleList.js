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
    const { props, state } = this;
    const { history } = props;
    console.log('--------------')
    console.log(props.history.location.state);
    if (props.history.location.state === 'test') {
      history.goBack();

    } else {
      history.push('/calendar', 'test');
    }
    console.log(props.history.location.state);
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { state, props } = this;
    console.log('==============')
    console.log(props.history.location.state);
    return (
      <section className={cx('ScheduleNewAdd')}>
        {props.history.location.state === 'test' ?
          <AddPopup close={this.toggle} name='' weight='' reps='' addData={props.add} selectedDate={props.selectedDate} />
          :
          null
        }
        <button className={cx('addButton')} onClick={this.toggle}>
          <Icon icon={ic_add} size={24} style={{ color: '#fff' }} />
          {props.history.location.state}
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
  touchStart = (e) => {
    console.log(e.screenX);
  }
  touchEnd = (e) => {
    console.log(e.screenX);
  }
  render() {
    const { props, state } = this;
    return (
      <div className={cx('list-item')}  >
        <span className={cx('txt')} onClick={this.toggle}>{props.name}</span>
        {state.editMode ?
          <AddPopup changeName={props.changeName} close={this.toggle} name={props.name} weight={props.weight} reps={props.reps} id={props.id} addData={props.add} selectedDate={props.selectedDate} />
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

  delete = (e) => {
    const { props } = this;
    e.target.classList.add(cx('selected'));
    const flag = props.length === 1 ? true : false;
    const detail = { weight: props.weight, reps: props.reps, timestamp: props.timestamp };
    this.buttonPressTimer = setTimeout(() => {
      props.del({ id: props.id, detail, flag });
    }, 2000);
  }
  release = (e) => {
    e.target.classList.remove(cx('selected'));
    clearTimeout(this.buttonPressTimer);
  }
  render() {
    const { props } = this;
    return (
      <span className={cx('tag')} onTouchStart={(e) => { this.delete(e) }} onTouchEnd={(e) => { this.release(e) }}>{props.weight}kg / {props.reps}reps</span>
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
          <ScheduleTag length={list[i].detail.length} id={list[i].id} del={this.props.del} key={j} weight={list[i].detail[j].weight} reps={list[i].detail[j].reps} timestamp={list[i].detail[j].timestamp} />
        )
      }
      items.push(
        <ScheduleItem add={this.props.add} key={list[i].id} id={list[i].id} name={list[i].name} weight={list[i].detail[list[i].detail.length - 1].weight} reps={list[i].detail[list[i].detail.length - 1].reps} selectedDate={this.props.selectedDate} changeName={this.props.changeName}>{tags}</ScheduleItem>
      )
      tags = [];
    }
    return items;
  }
  render() {
    const { props } = this;

    return (
      <Fragment>
        <ScheduleNewAdd history={props.history} historyPop={props.historyPop} historyPush={props.historyPush} add={props.add} selectedDate={props.selectedDate} />
        <section className={cx('scheduleList')}>
          {this.create()}
        </section >
      </Fragment>
    );
  }
}


export default ScheduleList;