import React, { Component, Fragment } from 'react';

import styles from './ScheduleList.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_fitness_center } from 'react-icons-kit/md/ic_fitness_center'
import { ic_repeat } from 'react-icons-kit/md/ic_repeat'
import { ic_build } from 'react-icons-kit/md/ic_build'

const cx = classNames.bind(styles);

class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      selected: false,
      value: props.name,
    }
  }
  toggle = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
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
        {this.state.editMode ?
          <Fragment>
            <input type="text" className={cx('list-input')} value={state.value} onChange={this.handleChange} />
            <div className={cx('input-wrap')}>
              <Icon icon={ic_fitness_center} size={24} style={{ color: '#e0e0e0' }} />
              <input type="text" className={cx('list-input')} placeholder="weight" />
              <Icon icon={ic_repeat} size={24} style={{ color: '#e0e0e0' }} />
              <input type="number" className={cx('list-input')} placeholder="reps" />
            </div>
            <div style={{ padding: '16px 8px' }}>
              <button onClick={() => { props.addData({ id: props.id, date: props.selectedDate }) }}>ADD</button>
              <button>SAVE</button>
            </div>

          </Fragment>
          :
          <span className={cx('txt')} onClick={this.toggle}>{props.name}</span>}
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
        <ScheduleItem key={list[i].id} id={list[i].id} name={list[i].name} addData={this.props.addData} selectedDate={this.props.selectedDate}>{tags}</ScheduleItem>
      )
      tags = [];
    }
    return items;
  }
  render() {
    const { list } = this.props;
    return (
      <section className={cx('scheduleList')}>
        {this.create()}
      </section >
    );
  }
}


export default ScheduleList;