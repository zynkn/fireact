import React, { Component, Fragment } from 'react';

import styles from './ScheduleList2.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);




class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.edit,
    }
  }
  editName = (e) => {
    e.stopPropagation();
    this.setState({
      name: !this.state.name
    })
  }
  handleName = (e) => {
    e.stopPropagation();
  }
  stopPropa = (e) => {
    e.stopPropagation();
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      name: this.props.edit
    })
  }
  render() {
    const { props, state } = this;
    return (
      <div className={cx('list-item')} >
        <div className={cx('item-header')} onClick={(e) => { props.selectItem(e, props.no) }}>
          {state.name ?
            <Fragment>
              <input type="text" value={props.name} onChange={this.handleName} onClick={this.stopPropa} />
              <button>edut</button>
            </Fragment>
            :
            <span className={cx('name')} onClick={props.edit ? this.editName : null}>{props.name}</span>
          }
        </div>
        {
          props.edit ?
            <Fragment>
              <div className={cx('item-input')}>
                <label className={cx('input-wrap')}>
                  <input className={cx('input', 'half')} type="text" />
                  <span className={cx('name')}>Weight</span>
                </label>
                <label className={cx('input-wrap')}>
                  <input className={cx('input', 'half')} type="text" />
                  <span className={cx('name')}>Reps</span>
                </label>
              </div>
              <button className={cx('addBtn')}>Add</button>
            </Fragment>

            :
            null
        }

        <div className={cx('item-content')}>
          {props.children}
        </div>
      </div>
    )
  }
}

class ScheduleList2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    }
  }
  create = () => {
    const { list } = this.props;
    let items = [];
    let tags = [];
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].detail.length; j++) {
        tags.push(
          <span key={j} className={cx('tag')}>{list[i].detail[j].weight}kg / {list[i].detail[j].reps}reps</span>
        )
      }
      items.push(
        <Item selectItem={this.selectItem} key={i} no={i} name={list[i].name} edit={this.state.selectedItem === i ? true : false}>{tags}</Item>
      )
      tags = [];
    }
    return items;
  }
  selectItem = (e, no) => {
    e.stopPropagation();
    if (this.state.selectedItem === no) {
      this.setState({
        selectedItem: null,
      })
    } else {
      this.setState({
        selectedItem: no,
      })
    }

  }
  render() {
    return (
      <div className={cx('list-container')} >
        {this.create()}
      </div >
    );
  }
}


export default ScheduleList2;