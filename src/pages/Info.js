import React from 'react';

const Info = () => {
  console.log(this.props);
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Logout</h1>
    </div>
  );
};

export default Info;