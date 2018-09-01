import React from 'react';



import RecordContainer from 'containers/RecordContainer';

const Calendar = () => {
  return (
    <div style={{ marginTop: '64px', marginBottom: '48px', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <RecordContainer />
    </div>
  );
};

export default Calendar;