import React, { Fragment } from 'react';

import MypageContainer from 'containers/MypageContainer';

import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';

const MyPage = (props) => {
  return (
    <Fragment>
      <Header history={props.history} />
      <main>
        <MypageContainer />
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default MyPage;