import React from 'react';



import RecordContainer from 'containers/RecordContainer';

const Calendar = (props) => {
  return (
    <div style={{ marginTop: '64px', marginBottom: '48px', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', height: '100%' }}>
      <RecordContainer {...props} />
    </div>
  );
};

export default Calendar;