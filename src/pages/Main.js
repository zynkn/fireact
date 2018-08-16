import React from 'react';

import HeaderContainer from 'containers/HeaderContainer';
import BottomNavigation from 'components/Common/BottomNavigation';

const Main = () => {
  console.log(this.props);
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* <HeaderContainer /> */}
      <h1><span role="img" aria-label="fire">🔥</span>Fireact<span role="img" aria-label="atom">⚛️</span></h1>
      {/* <BottomNavigation /> */}
    </div>
  );
};

export default Main;