import React, { Component, Fragment } from 'react';

import styles from './ScheduleList.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_fitness_center } from 'react-icons-kit/md/ic_fitness_center'
import { ic_repeat } from 'react-icons-kit/md/ic_repeat'
import { ic_build } from 'react-icons-kit/md/ic_build'

const cx = classNames.bind(styles);


// class InputList extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(new Date().toDateString());
//     return (
//       <div className={cx('input-wrap')}>
//         <input type="text" className={cx('title')} placeholder='Title' />
//         <div className={cx('tag-wrap')}>
//           <span className={cx('tag')}>15kg / 10reps</span>
//           <span className={cx('tag')}>15kg / 10reps</span>
//           <span className={cx('tag')}>15kg / 10reps</span>
//           <span className={cx('tag')}>15kg / 10reps</span>
//           <span className={cx('tag')}>15kg / 10reps</span>
//         </div>
//         <label className={cx('item')}>
//           <span className={cx('name')}>Weights</span>
//           <div className={cx('button-wrap')}>
//             <span className={cx('button')}><Icon icon={ic_keyboard_arrow_down} size={24} style={{ color: '#fff' }} /></span>
//             <input type="number" className={cx('weight')} />
//             <span className={cx('button')}><Icon icon={ic_keyboard_arrow_up} size={24} style={{ color: '#fff' }} /></span>
//           </div>
//         </label>
//         <label className={cx('item')}>
//           <span className={cx('name')}>Reps</span>
//           <div className={cx('button-wrap')}>
//             <span className={cx('button')}><Icon icon={ic_keyboard_arrow_down} size={24} style={{ color: '#fff' }} /></span>
//             <input type="number" className={cx('weight')} />
//             <span className={cx('button')}><Icon icon={ic_keyboard_arrow_up} size={24} style={{ color: '#fff' }} /></span>
//           </div>
//         </label>
//         <button>
//           save
//         </button>
//       </div>
//     )
//   }
// }

class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      selected: false,
    }
  }
  toggle = () => {
    this.setState({
      selected: !this.state.selected
    })
  }
  render() {
    const { props } = this;
    return (
      <div key={props.key} className={cx('list-item', this.state.selected ? 'selected' : '')} onClick={this.toggle}>
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
            <input type="text" className={cx('list-input')} value={props.name} />
            <div className={cx('input-wrap')}>
              <Icon icon={ic_fitness_center} size={24} style={{ color: '#e0e0e0' }} />
              <input type="text" className={cx('list-input')} placeholder="weight" />
              <Icon icon={ic_repeat} size={24} style={{ color: '#e0e0e0' }} />
              <input type="number" className={cx('list-input')} placeholder="reps" />
            </div>
            <div style={{ padding: '16px 8px' }}>
              <button>ADD</button>
              <button>SAVE</button>
            </div>

          </Fragment>
          :
          <span className={cx('txt')}>{props.name}</span>}
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
    console.log(list);
    let items = [];
    let tags = [];
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].detail.length; j++) {
        tags.push(
          // <span key={j} className={cx('tag')}>{list[i].detail[j].weight}kg / {list[i].detail[j].reps}reps</span>
          <ScheduleTag key={j} weight={list[i].detail[j].weight} reps={list[i].detail[j].reps} />
        )
      }
      items.push(
        // <div key={i} className={cx('list-item')}>
        //   <span className={cx('txt')}>{list[i].name}</span>
        //   <div className={cx('tag-wrap')}>
        //     {tags}
        //   </div>
        // </div>
        <ScheduleItem key={i} name={list[i].name}>{tags}</ScheduleItem>
      )
      tags = [];
    }
    return items;
  }
  render() {
    const { list } = this.props;
    console.log(list);
    return (
      <section className={cx('scheduleList')}>
        {this.create()}
      </section >
    );
  }
}


export default ScheduleList;