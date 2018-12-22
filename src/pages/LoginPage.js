import React, { Fragment } from 'react';
import LoginContainer from 'containers/LoginContainer';


const HistoryPage = () => {
  return (
    <Fragment>
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FF7043', padding: '32px 24px', height: '100vh' }}>
        <LoginContainer />
        <span style={{ color: 'white', fontSize: '1.4em' }}>
          If you encounter any problem, please click <a href="https://github.com/zynkn/fireact/issues" rel="noopener noreferrer" target="_blank">Here</a>
        </span>
      </section>
    </Fragment>
  );
};

export default HistoryPage;