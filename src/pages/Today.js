import React from 'react';

import HeaderContainer from 'containers/HeaderContainer';
import BottomNavigation from 'components/Common/BottomNavigation';

const Today = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <HeaderContainer />
      <h1>Today</h1>
      <BottomNavigation />
    </div>
  );
};

export default Today;