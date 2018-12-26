import React, { Component } from 'react';

import WorkoutModal from 'components/WorkoutPage/WorkoutModal';
import styles from './WorkoutList.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit';
import { ic_event_busy } from 'react-icons-kit/md/ic_event_busy'

const cx = classNames.bind(styles);


const EmptyList = () => (
  <div className={cx('empty-wrap')}>
    <Icon icon={ic_event_busy} size={48} style={{ color: '#9e9e9e' }} />
    <p className={cx('txt')}>We have no data to display</p>
  </div>
)
const Tag = (props) => {
  return (
    <span className={cx('Tag')}>
      {props.weight}kg {props.reps}reps
    </span>
  )
}
const ListItem = (props) => {
  function generate() {
    const { detail } = props;
    const arr = [];

    for (let i = 0; i < detail.length; i++) {
      arr.push(<Tag key={i} weight={detail[i].weight} reps={detail[i].reps} />);
    }
    return arr;
  }
  return (
    <div className={cx('ListItem')} data-id={props.id}>
      <div className={cx('title')}>
        {props.name}
      </div>
      <div className={cx('tag-wrap')}>
        {generate()}
      </div>
    </div>
  )
}

class WorkoutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      title: '',
      weight: '',
      reps: '',
      id: '',
    }
  }
  listHandler = (e) => {
    const { props, state } = this;
    const el = e.target.closest(`.${cx('ListItem')}`);
    const title = el.querySelector(`.${cx('title')}`).innerText;
    const id = el.dataset.id;
    const weight = el.querySelector(`.${cx('Tag')}:last-child`).innerText.split(' ')[0];
    const reps = el.querySelector(`.${cx('Tag')}:last-child`).innerText.split(' ')[1];
    const { history } = this.props;
    history.push(history.location.pathname, 'Modal');
    document.querySelector('body').style.overflowY = 'hidden';
    this.setState({
      clicked: true,
      title: title,
      weight: weight.split('kg')[0],
      reps: reps.split('reps')[0],
      id: el.dataset.id,
    })

  }
  generate = () => {
    const { data } = this.props;
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(<ListItem id={data[i].id} key={i} name={data[i].name} detail={data[i].detail} />);
    }
    // console.log(arr);
    return arr;
  }

  open = () => {
    const { history } = this.props;
    history.push(history.location.pathname, 'Modal');
    document.querySelector('body').style.overflowY = 'hidden';
    this.setState({ clicked: true });
  }
  close = () => {
    const { history } = this.props;
    history.goBack();
    document.querySelector('body').style.overflowY = 'auto';
    this.setState({ clicked: false });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.history.action === "POP" && nextProps.history.location.state === undefined) {
      document.querySelector('body').style.overflowY = 'auto';
      this.setState({
        clicked: false
      })
    }
  }
  render() {
    const { props, state } = this;
    return (
      <React.Fragment>
        <div className={cx('list-wrap')} onClick={this.listHandler}>
          {/* {this.generate()} */}
          {this.props.data.length !== 0 ? this.generate() : <EmptyList />}
        </div>
        <WorkoutModal id={state.id} set={props.set} visible={state.clicked} close={this.close} name={state.title} weight={state.weight} reps={state.reps} />

      </React.Fragment>

    );
  }
}


export default WorkoutList;