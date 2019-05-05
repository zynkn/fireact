import React from 'react';
import Pane from 'components/common/Pane';
import Calendar from 'components/calendar/Calendar';
import WorkoutList from 'components/calendar/WorkoutList';

const CalendarPage: React.FC = () => {

  return (
    <Pane className="lg">
      <Calendar />
      <WorkoutList />
    </Pane>
  )
}

export default CalendarPage;