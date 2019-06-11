import React from 'react';
import Pane from 'components/common/Pane';
import WorkoutContainer from 'containers/WorkoutContainer';
import { RouteComponentProps } from 'react-router-dom';

const CalendarPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

  return (
    <Pane className="lg">
      <WorkoutContainer {...props} />
    </Pane>
  )
}

export default CalendarPage;