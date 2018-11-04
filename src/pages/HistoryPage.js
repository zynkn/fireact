import React from 'react';

import Calendar from 'components/HistoryPage/Calendar';
import AddBtn from 'components/HistoryPage/AddBtn';
import HistoryList from 'components/HistoryPage/HistoryList';

const HistoryPage = () => {
  return (
    <main>
      <Calendar />
      <AddBtn />
      <HistoryList />
    </main>
  );
};

export default HistoryPage;