import React from 'react';
import Pane from 'components/common/Pane';
import WorkoutContainer from 'containers/WorkoutContainer';
import ModalContainer from 'containers/ModalContainer';


const CalendarPage: React.FC = () => {

  return (
    <Pane className="lg">
      <WorkoutContainer />
      <ModalContainer />
    </Pane>
  )
}

export default CalendarPage;