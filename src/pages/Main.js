import React from 'react';

import HeaderContainer from 'containers/HeaderContainer';
import Header from 'components/Common/Header';

const Authentication = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <HeaderContainer />
      <h1><span role="img" aria-label="fire">🔥</span>Fireact<span role="img" aria-label="atom">⚛️</span></h1>
    </div>
  );
};

export default Authentication;