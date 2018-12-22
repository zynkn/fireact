import React, { Fragment } from 'react';

import ItemList from 'components/MyPage/ItemList';

import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';

const MyPage = (props) => {
  return (
    <Fragment>
      <Header history={props.history} />
      <main>
        <ItemList />
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default MyPage;