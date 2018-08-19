import React from 'react';

import DateView from 'components/Calendar/DateView';
import ScheduleList from 'components/Calendar/ScheduleList';
import RecordContainer from 'containers/RecordContainer';

const Calendar = () => {
  return (
    <div style={{ marginTop: '64px', marginBottom: '48px', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <DateView />
      <ScheduleList />
      <RecordContainer />
      {/* <AddButton style={{ position: 'absolute', bottom: '64px', right: '16px' }} /> */}
    </div>
  );
};

export default Calendar;