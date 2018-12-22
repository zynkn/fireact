import React, { Fragment } from 'react';

import WorkoutContainer from 'containers/WorkoutContainer';

import Calendar from 'components/WorkoutPage/Calendar';
import AddBtn from 'components/WorkoutPage/AddBtn';
import WorkoutList from 'components/WorkoutPage/WorkoutList';

import Header from 'components/Common/Header';
import BottomNav from 'components/Common/BottomNav';

const WorkoutPage = (props) => {
  //console.log(props.history);
  return (
    <Fragment>
      <Header history={props.history} />
      <main>
        <WorkoutContainer />
        <AddBtn history={props.history} />
        <WorkoutList />
      </main>
      <BottomNav />
    </Fragment>
  );
};

export default WorkoutPage;