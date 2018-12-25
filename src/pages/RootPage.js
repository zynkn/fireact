import React, { Fragment } from 'react';
import storage from 'lib/storage';
import indexedDB from 'lib/indexedDB';
import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';


const RootPage = (props) => {
  //console.log(props.user);

  return (
    <Fragment>
      <Header history={props.history} />
      <main style={{ justifyContent: 'center' }}>
        {storage.get('user') ? storage.get('user').uid : 'no data'}
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default RootPage;