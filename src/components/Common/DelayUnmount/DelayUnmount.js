import React from 'react';

import styles from './DelayUnmount.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const DelayUnmount = (Component) => {
  return class extends React.Component {
    state = {
      shouldRender: this.props.isMounted
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isMounted && !this.props.isMounted) {
        setTimeout(
          () => this.setState({ shouldRender: false }),
          this.props.delayTime
        );
      } else if (!prevProps.isMounted && this.props.isMounted) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
}


export default DelayUnmount;