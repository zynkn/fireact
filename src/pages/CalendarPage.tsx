import React from 'react';
import Pane from 'components/common/Pane';
import WorkoutContainer from 'containers/WorkoutContainer';
import ModalContainer2 from 'containers/ModalContainer2';


const CalendarPage: React.FC = () => {

  return (
    <Pane className="lg">
      <WorkoutContainer />
      <ModalContainer2 />
    </Pane>
  )
}

export default CalendarPage;