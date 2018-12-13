import React, { Fragment } from 'react';
import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';

const RootPage = () => {
  return (
    <Fragment>
      <Header />
      <main style={{ justifyContent: 'center' }}>
        <span style={{ fontSize: '72pt' }}>🔥</span>
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default RootPage;