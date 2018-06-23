import React from 'react';
import Pane from 'components/Common/Pane';
import Button from 'components/Authentication/Button';

const Authentication = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1><span role="img" aria-label="fire">🔥</span>Fireact Auth<span role="img" aria-label="atom">⚛️</span></h1>
      <Pane>
        <Button />
      </Pane>
    </div>
  );
};

export default Authentication;