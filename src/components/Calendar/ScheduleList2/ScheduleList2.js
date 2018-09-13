import React, { Component, Fragment } from 'react';
import moment from 'moment';
import styles from './ScheduleList2.scss';
import classNames from 'classnames/bind';
import { Icon } from 'react-icons-kit'
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import AddPopup from 'components/Calendar/AddPopup';

const cx = classNames.bind(styles);

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameMode: props.selectedItem,
      weight: props.weight,
      reps: props.reps,
      name: props.name,
      id: props.id ? props.id : '',
      mobilePopup: false,
    }
  }
  editName = (e) => {
    e.stopPropagation();
    this.setState({
      nameMode: !this.state.nameMode
    })
  }
  handleName = (e) => {
    e.stopPropagation();
  }
  stopPropa = (e) => {
    e.stopPropagation();
  }
  handleInput = (e, stateName) => {
    this.setState({
      [stateName]: e.target.value,
    })
  }

  add = () => {
    const { props, state } = this;
    const detail = { weight: state.weight, reps: state.reps, timestamp: moment().format() };
    props.add({ name: state.name, detail, id: state.id });
  }
  edit = (e) => {
    const { props, state } = this;
    e.stopPropagation();
    props.edit({ name: state.name, id: state.id });
    this.setState({
      nameMode: false,
    })
  }

  handleItem = () => {
    if (window.innerWidth < 769) {
      this.setState({
        mobilePopup: true,
      })
    } else {
      this.props.selectItem(this.props.no);
    }
  }
  closePopup = () => {
    this.setState({
      mobilePopup: false,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.nameMode) {
      this.setState({
        nameMode: nextProps.selectedItem
      })
    } else {
      this.setState({
        weight: nextProps.weight,
        reps: nextProps.reps,
        name: nextProps.name,
        id: nextProps.id ? nextProps.id : '',
      })
    }
  }
  render() {
    const { props, state } = this;
    return (
      <Fragment>
        <div className={cx('list-item')} >
          <div className={cx('item-header')} onClick={this.handleItem}>
            {state.nameMode ?
              <Fragment>
                <input type="text" className={cx('editInput')} value={state.name} onChange={(e) => this.handleInput(e, 'name')} onClick={this.stopPropa} />
                <button className={cx('editBtn')} onClick={(e) => this.edit(e)}>
                  <Icon icon={ic_mode_edit} size={16} style={{ color: '#fff' }} />
                </button>
              </Fragment>
              :
              <span className={cx('name')} onClick={props.selectedItem ? this.editName : null}>{props.name}</span>
            }
          </div>
          {
            props.selectedItem ?
              <Fragment>
                <div className={cx('item-input')}>
                  <label className={cx('input-wrap')}>
                    <input className={cx('input', 'half')} type="text" value={state.weight} onChange={(e) => this.handleInput(e, 'weight')} />
                    <span className={cx('name')}>Weight</span>
                  </label>
                  <label className={cx('input-wrap')}>
                    <input className={cx('input', 'half')} type="text" value={state.reps} onChange={(e) => this.handleInput(e, 'reps')} />
                    <span className={cx('name')}>Reps</span>
                  </label>
                </div>
                <button className={cx('addBtn')} onClick={this.add}>
                  <Icon icon={ic_add} size={24} style={{ color: '#fff' }} />
                </button>
              </Fragment>
              :
              null
          }

          <div className={cx('item-content')}>
            {props.children}
          </div>
          {state.mobilePopup ?
            <AddPopup close={this.closePopup} name={state.name} weight={state.weight} reps={state.reps} id={props.id} add={props.add} edit={props.edit} />
            :
            null
          }
        </div>

      </Fragment>

    )
  }
}
class Tag extends Component {
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
      <span onMouseDown={(e) => this.delete(e)} onMouseUp={(e) => this.release(e)}
        onTouchStart={(e) => this.delete(e)} onTouchEnd={(e) => this.release(e)}
        className={cx('tag')}>{props.weight}kg / {props.reps}reps</span>
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
          <Tag del={this.props.del} length={list[i].detail.length} key={j} weight={list[i].detail[j].weight} id={list[i].id} reps={list[i].detail[j].reps} timestamp={list[i].detail[j].timestamp} />
        )
      }
      items.push(
        <Item add={this.props.add}
          edit={this.props.edit}
          edit={this.props.edit}
          selectItem={this.selectItem}
          key={i} no={i} id={list[i].id}
          name={list[i].name}
          weight={list[i].detail[list[i].detail.length - 1].weight}
          reps={list[i].detail[list[i].detail.length - 1].reps}
          selectedItem={this.state.selectedItem === i ? true : false}
        >{tags}</Item>
      )
      tags = [];
    }
    return items;
  }
  selectItem = (no) => {
    if (window.innerWidth < 769) {

    } else {
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