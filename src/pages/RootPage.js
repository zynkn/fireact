import React, { Fragment } from 'react';
import fireact from 'assets/svg/fireact21.svg';
import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';


const RootPage = (props) => {
  return (
    <Fragment>
      <Header history={props.history} />
      <main style={{ justifyContent: 'center' }}>
        <img src={fireact} alt="fireact" />
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default RootPage;