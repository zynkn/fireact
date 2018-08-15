import React from 'react';

import HeaderContainer from 'containers/HeaderContainer';

const Today = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <HeaderContainer />
      <h1>Today</h1>
    </div>
  );
};

export default Today;