import React, { Component } from 'react';

import WorkoutModal from 'components/WorkoutPage/WorkoutModal';
import styles from './AddBtn.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit';
import { ic_add } from 'react-icons-kit/md/ic_add'

const cx = classNames.bind(styles);


class AddBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  open = () => {
    const { history } = this.props;
    history.push(history.location.pathname, 'Modal');
    document.querySelector('body').style.overflowY = 'hidden';
    this.setState({ clicked: true });
  }
  close = () => {
    const { history } = this.props;
    document.querySelector('body').style.overflowY = 'auto';
    history.goBack();
    this.setState({ clicked: false });

  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillMount() {
    console.log('componentWillMount')
    // this.props.history.push('/', 'Normal')
  }
  componentWillReceiveProps(nextProps) {
    console.log('UNSAFE_componentWillReceiveProps')
    if (nextProps.history.action === "POP" && nextProps.history.location.state === undefined) {
      document.querySelector('body').style.overflowY = 'auto';
      this.setState({
        clicked: false
      })
    }
  }
  componentDidUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
  }
  render() {
    const { state, props } = this;
    return (
      <React.Fragment>
        <div className={cx('btn-wrap')}>
          <button className={cx('AddBtn')} onClick={this.open}>
            <Icon icon={ic_add} size={24} style={{ color: '#fff' }} />
          </button>
        </div>
        <WorkoutModal set={props.set} visible={state.clicked} close={this.close} weight='0.0' reps='0' />
      </React.Fragment>

    );
  }
}


export default AddBtn;