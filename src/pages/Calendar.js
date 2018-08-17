import React from 'react';

import DateView from 'components/Calendar/DateView';
import AddButton from 'components/Calendar/AddButton';

const Calendar = () => {
  return (
    <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DateView />
      <AddButton style={{ position: 'absolute', bottom: '64px', right: '16px' }} />
    </div>
  );
};

export default Calendar;