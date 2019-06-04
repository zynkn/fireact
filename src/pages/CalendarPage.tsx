import React from 'react';
import Pane from 'components/common/Pane';
import WorkoutContainer from 'containers/WorkoutContainer';

const CalendarPage: React.FC = () => {

  return (
    <Pane className="lg">
      <WorkoutContainer />
    </Pane>
  )
}

export default CalendarPage;