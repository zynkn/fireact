import React, { Component } from 'react';

import Auth from 'containers/auth';
import HeaderContainer from 'containers/HeaderContainer';

class Authentication extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <HeaderContainer />
        <Auth />
      </div>
    );
  }
};

export default Authentication;