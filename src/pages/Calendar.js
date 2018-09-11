import React from 'react';



import RecordContainer from 'containers/RecordContainer';

const Calendar = (props) => {
  return (
    <div style={{ overflowY: 'auto', padding: '0 16px', display: 'flex', background: '#f3f5f7', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <RecordContainer {...props} />
    </div>
  );
};

export default Calendar;