import React from 'react';
import Pane from 'components/common/Pane';
import Calendar from 'components/calendar/Calendar';

const CalendarPage: React.FC = () => {

  return (
    <Pane className="lg">
      <Calendar />
    </Pane>
  )
}

export default CalendarPage;