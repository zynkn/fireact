import React, { Component } from 'react';

import Auth from 'containers/auth';
import HeaderContainer from 'containers/HeaderContainer';
import BottomNavigation from 'components/Common/BottomNavigation';

class Authentication extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* <HeaderContainer /> */}
        <Auth />
        {/* <BottomNavigation /> */}
      </div>
    );
  }
};

export default Authentication;