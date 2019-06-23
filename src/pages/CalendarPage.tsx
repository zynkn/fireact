import React from 'react';
import Pane from 'components/common/Pane';
import WorkoutContainer from 'containers/WorkoutContainer';
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom';

const CalendarPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const isLogin: boolean = useSelector((state: any) => state.user.isLogin);
  if (!isLogin) {
    props.history.replace('/login');
  }

  return (
    <Pane className="lg">
      <WorkoutContainer {...props} />
    </Pane>
  )
}

export default CalendarPage;