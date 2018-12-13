import React, { Fragment } from 'react';

import Calendar from 'components/HistoryPage/Calendar';
import AddBtn from 'components/HistoryPage/AddBtn';
import HistoryList from 'components/HistoryPage/HistoryList';

import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';

const HistoryPage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Calendar />
        <AddBtn />
        <HistoryList />
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default HistoryPage;