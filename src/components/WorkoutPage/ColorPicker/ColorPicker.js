import React, { Component } from 'react';

import styles from './ColorPicker.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    }
  }
  change = (e) => {
    function index(el) {
      if (!el) return -1;
      var i = 0;
      do {
        i++;
      } while (el = el.previousElementSibling);
      return i;
    }
    if (e.target.tagName === "SPAN") {

      this.setState({
        selected: index(e.target.closest("span"))
      })
    }

  }
  generate = () => {
    const colorset = ['yellow', 'blue', 'red', 'green', 'purple', 'pink'];
    const arr = [];
    arr.push(colorset.map((i, j) => {

      return (<span key={i} className={cx('color', i, (j + 1) === this.state.selected ? 'selected' : '')} />)
    }));
    return arr;
  }
  render() {
    const { data } = this.props;
    let mW = 288;
    let newX = data.x;
    if (window.innerWidth - mW - data.x < 0) {
      newX = window.innerWidth - mW - 16;
    }
    return (
      <React.Fragment>
        {data.visible ?
          <React.Fragment>
            <div className={cx('bg')} onClick={this.props.close}></div>
            <div className={cx('ColorPicker')} onClick={this.change} style={{ transform: `translate(${newX}px, ${data.y}px)` }}>
              {this.generate()}
            </div>
          </React.Fragment>
          :
          null
        }

      </React.Fragment>
    );
  }
}


export default ColorPicker;